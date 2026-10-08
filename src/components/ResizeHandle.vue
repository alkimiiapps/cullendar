<template>
  <div
    draggable="true"
    style="position:absolute;top:0;bottom:0;right:0;cursor:ew-resize;"
    @dragstart.stop.prevent
    @mousedown="onMousedown">
    <slot v-bind="{ isResizing }"/>
  </div>
</template>

<script lang="ts" setup>
// Libraries
import { ref, toRefs, inject } from 'vue'
// Types
import type { Event, ResizeBoundary, InternalResource, BuildApiResult } from '../types'
// Composables
import useEdgeScroll from '../composables/EdgeScroll'

const props = defineProps<{
  event: Event,
  resource: InternalResource,
  date: string
}>()

const api = inject('api') as BuildApiResult
const { elements, view, resources, layout, callbacks, utils, internal } = toRefs(api)

const resourceBoundaries: ResizeBoundary[] = []
const dateBoundaries: ResizeBoundary[] = []

const isResizing = ref(false)
const startX = ref(0)
const startY = ref(0)

const { scrolledX, scrolledY, start: startEdgeScroll, stop: stopEdgeScroll } = useEdgeScroll(elements.value.timeline)

function onMousedown(e: MouseEvent): void {
  startX.value = e.clientX
  startY.value = e.clientY
  isResizing.value = true
  internal.value.isResizing = true

  setResourceResizeBoundaries()
  setDateResizeBoundaries()

  document.addEventListener('mousemove', onMousemove)
  document.addEventListener('mouseup', onMouseup)

  startEdgeScroll()
}
function onMousemove(e: MouseEvent): void {
  const deltaX = Math.max(0, e.clientX - startX.value + scrolledX.value)
  const deltaY = Math.max(0, e.clientY - startY.value + scrolledY.value)

  updateResizeSelection(resourceBoundaries, internal.value.resizeResources, deltaY, props.resource.id)
  updateResizeSelection(dateBoundaries, internal.value.resizeDates, deltaX, props.date)
}
function onMouseup(): void {
  const resources = Array.from(internal.value.resizeResources.values()).slice(1).map(id => utils.value.getResource(id)!)
  const dates = Array.from(internal.value.resizeDates.values()).slice(1)

  isResizing.value = false
  internal.value.resizeResources.clear()
  internal.value.resizeDates.clear()
  internal.value.isResizing = false

  document.removeEventListener('mousemove', onMousemove)
  document.removeEventListener('mouseup', onMouseup)

  stopEdgeScroll()

  if (!dates.length && !resources.length)
    return

  callbacks.value.onResizeEvent({
    event: props.event,
    resource: props.resource,
    resources,
    date: props.date,
    dates,
    view: view.value
  })
}
function updateResizeSelection(boundaries: ResizeBoundary[], selectedIds: Set<string>, delta: number, initialId: string): void {
  const crossedBoundaries = boundaries.filter(boundary => delta > boundary.edge)

  selectedIds.clear()
  selectedIds.add(initialId)

  for (let i = 0; i < crossedBoundaries.length; i++) {
    const boundary = crossedBoundaries[i]
    selectedIds.add(boundary.id)
  }
}
function setDateResizeBoundaries(): void {
  let edge = 20
  const start = view.value.dates.indexOf(props.date) + 1

  dateBoundaries.length = 0

  for (let i = start; i < view.value.dates.length; i++) {
    const date = view.value.dates[i]
    const size = internal.value.durations.get(date)! * internal.value.scale

    dateBoundaries.push({ id: date, edge })
    edge += size
  }
}
function setResourceResizeBoundaries(): void {
  let edge = 20
  const arr = Array.from(resources.value.values())
  const start = arr.findIndex(v => v.id === props.resource.id) + 1

  resourceBoundaries.length = 0

  for (let i = start; i < arr.length; i++) {
    const resource = arr[i]

    if ('isGroup' in resource) {
      edge += layout.value.resourceGroupSize
      continue
    }

    const size = resource.maxEvents * layout.value.eventSize

    resourceBoundaries.push({ id: resource.id, edge })
    edge += size
  }
}
</script>
