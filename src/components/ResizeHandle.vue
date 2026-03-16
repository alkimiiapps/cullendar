<template>
  <div
    draggable="true"
    class="cullendar-resize-handle"
    @dragstart.stop.prevent
    @mousedown="onMousedown">
    <slot v-bind="{ isResizing }"/>
  </div>
</template>

<script lang="ts" setup>
// Libraries
import { ref, toRefs, inject } from 'vue'
// Types
import type { Event, ResizeResourceBoundary, InternalResource, BuildApiResult } from '../types'
// API
import Constants from '../api/Constants'
// Composables
import useEdgeScroll from '../composables/EdgeScroll'

const props = defineProps<{
  event: Event,
  resource: InternalResource,
  date: string
}>()

const api = inject('api') as BuildApiResult
const { dayWidth, elements, view, resources, layout, callbacks, utils, resizeDatesSet, resizeResourcesSet } = toRefs(api)

let prevDeltaDays = 0
let prevDeltaBoundary = 0

const resourceBoundaries: ResizeResourceBoundary[] = []

const isResizing = ref(false)
const startX = ref(0)
const startY = ref(0)

const { scrolledX, scrolledY, start: startEdgeScroll, stop: stopEdgeScroll } = useEdgeScroll(elements.value.timeline)

function onMousedown(e: MouseEvent): void {
  startX.value = e.clientX
  startY.value = e.clientY
  isResizing.value = true

  resizeDatesSet.value.add(props.date)
  resizeResourcesSet.value.add(props.resource.id)

  setResourceBoundaries()

  document.addEventListener('mousemove', onMousemove)
  document.addEventListener('mouseup', onMouseup)

  elements.value.calendar.classList.add(Constants.RESIZING_CLASS)
  startEdgeScroll()
}
function onMousemove(e: MouseEvent): void {
  const deltaX = Math.max(0, e.clientX - startX.value + scrolledX.value)
  const deltaY = Math.max(0, e.clientY - startY.value + scrolledY.value)

  setDeltaResources(deltaY)
  setDeltaDays(deltaX)
}
function onMouseup(): void {
  const resources = Array.from(resizeResourcesSet.value.values()).slice(1).map(id => utils.value.getResource(id)!)
  const dates = Array.from(resizeDatesSet.value.values()).slice(1)

  prevDeltaDays = 0
  prevDeltaBoundary = 0

  resizeResourcesSet.value.clear()
  resizeDatesSet.value.clear()
  isResizing.value = false

  document.removeEventListener('mousemove', onMousemove)
  document.removeEventListener('mouseup', onMouseup)

  elements.value.calendar.classList.remove(Constants.RESIZING_CLASS)
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
function setDeltaResources(deltaY: number): void {
  while (prevDeltaBoundary < resourceBoundaries.length && deltaY > resourceBoundaries[prevDeltaBoundary].bottom) {
    resizeResourcesSet.value.add(resourceBoundaries[prevDeltaBoundary].id)
    prevDeltaBoundary++
  }

  while (prevDeltaBoundary > 0 && deltaY < resourceBoundaries[prevDeltaBoundary - 1].top) {
    resizeResourcesSet.value.delete(resourceBoundaries[prevDeltaBoundary - 1].id)
    prevDeltaBoundary--
  }
}
function setDeltaDays(deltaX: number): void {
  const delta = Math.ceil(deltaX / (dayWidth.value + layout.value.gap))

  if (prevDeltaDays === delta)
    return

  const dates = view.value.dates
  const index = dates.indexOf(props.date)

  prevDeltaDays = delta
  resizeDatesSet.value = new Set<string>(dates.slice(index, index + delta + 1))
}
function setResourceBoundaries(): ResizeResourceBoundary[] {
  let y = layout.value.eventSize
  let include = false

  resourceBoundaries.length = 0

  for (const [id, resource] of resources.value) {
    if ('isGroup' in resource)
      continue

    if (include) {
      const size = resource.maxEvents * layout.value.eventSize
      const boundary: ResizeResourceBoundary = {
        id,
        top: y,
        bottom: y + size
      }

      y += size
      resourceBoundaries.push(boundary)
    }

    if (id === props.resource.id)
      include = true
  }

  return resourceBoundaries
}
</script>

<style scoped>
  .cullendar-resize-handle {
    width: 16px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    cursor: ew-resize;
  }
</style>
