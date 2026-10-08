<template>
  <div :class="classes" @mouseenter="onMouseenter">
    <span
      v-if="droppable && resource.isEventDroppable"
      :style="dropzoneStyle"
      @dragenter="onDragenter"
      @dragover.prevent
      @dragleave="isDragOver = false"
      @drop="onDrop"/>
    <slot v-bind="{ date, resource, events, isDragOver, isResizeOver }"/>
  </div>
</template>

<script lang="ts" setup>
// Libraries
import { ref, computed, toRefs, inject, type CSSProperties } from 'vue'
import { Temporal } from 'temporal-polyfill'
// Types
import type { Event, InternalResource, BuildApiResult, ToPayloadOptions, DragDropNewTimesResult, DragDropCallbackPayload } from '../types'
// Utils
import toArray from '../utils/ToArray'
import isPlainDate from '../utils/date/IsPlainDate'
import toPlainDateString from '../utils/date/ToPlainDateString'

interface Props {
  date: string,
  resource: InternalResource,
  events: Event[],
  droppable?: boolean,
  dragoverClass?: string,
  resizeoverClass?: string
}

const props = withDefaults(defineProps<Props>(), { droppable: true })

const api = inject('api') as BuildApiResult
const { view, callbacks, internal } = toRefs(api)

const isDragOver = ref(false)
const isResizeOver = computed(() => internal.value.resizeResources.has(props.resource.id) && internal.value.resizeDates.has(props.date))
const dropzoneStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  inset: 0,
  pointerEvents: internal.value.isDragging ? 'all' : 'none',
  zIndex: internal.value.isDragging ? 1 : undefined
}))

const classes = computed(() => [
  isDragOver.value && props.dragoverClass,
  isResizeOver.value && props.resizeoverClass
].filter(Boolean).join(' '))

function onDragenter(e: DragEvent): void {
  if (e.dataTransfer && e.dataTransfer.types.includes(internal.value.dataTransferType))
    isDragOver.value = true
}
function onDrop(e: DragEvent): void {
  if (!e.dataTransfer || !e.dataTransfer.types.includes(internal.value.dataTransferType))
    return

  isDragOver.value = false

  const data = JSON.parse(e.dataTransfer.getData(internal.value.dataTransferType))

  if (!data.id)
    return callbacks.value.onAddEvent(toPayload({ data }))

  const originDate = toPlainDateString(data.start, view.value.timezone)

  if ((originDate === props.date) && toArray(data.resourceId).includes(props.resource.id))
    return

  const times = isPlainDate(data.start) ? toNewDates(data) : toNewTimes(data)
  const payload = toPayload({ event: data, times })

  if (!callbacks.value.onBeforeDropEvent(payload))
    return

  callbacks.value.onMoveEvent(payload)
}
function toNewDates(event: Event): DragDropNewTimesResult {
  const day = Temporal.PlainDate.from(props.date)
  const duration = Temporal.PlainDate.from(event.start).until(Temporal.PlainDate.from(event.end))

  return {
    start: day.toString(),
    end: day.add(duration).toString()
  }
}
function toNewTimes(event: Event): DragDropNewTimesResult {
  const day = Temporal.PlainDate.from(props.date)
  const start = Temporal.Instant.from(event.start).toZonedDateTimeISO(view.value.timezone)
  const end = Temporal.Instant.from(event.end).toZonedDateTimeISO(view.value.timezone)
  const duration = start.until(end)

  const newStart = start.with({
    year: day.year,
    month: day.month,
    day: day.day
  })

  return {
    start: newStart.toString({ timeZoneName: 'never' }),
    end: newStart.add(duration).toString({ timeZoneName: 'never' })
  }
}
function toPayload(options: ToPayloadOptions = {}): DragDropCallbackPayload {
  return {
    ...options,
    date: props.date,
    resource: props.resource,
    view: view.value
  }
}
function onMouseenter(): void {
  callbacks.value.onDayEnter(toPayload())
}
</script>
