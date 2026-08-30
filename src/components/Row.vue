<template>
  <slot v-bind="{ row, resource, virtualizer, events }"/>
</template>

<script lang="ts" setup>
// Libraries
import { computed, inject } from 'vue'
import { Temporal } from 'temporal-polyfill'
// Utils
import isPlainDate from '../utils/date/IsPlainDate'
import getTimelineScale from '../utils/math/GetTimelineScale'
// Types
import type { Virtualizer, Event, Resource, BuildApiResult, EventRow } from '../types'
import type { VirtualItem } from '@tanstack/vue-virtual'

const props = defineProps<{
  row: VirtualItem,
  resource: Resource,
  virtualizer: Virtualizer,
  size: number
}>()

const api = inject('api') as BuildApiResult

const events = computed(() => build(api.utils.getEvents(props.resource.id), props.size))

function build(values: Set<Event>, size: number): EventRow[] {
  const result: EventRow[] = []

  const origin = Temporal.PlainDate.from(api.view.start)
  const scale = getTimelineScale(api.view, size)
  const arr = Array.from(values.values())

  for (let i = 0; i < arr.length; i++) {
    const event = arr[i]

    const start = isPlainDate(event.start) ? Temporal.PlainDate.from(event.start) : Temporal.Instant.from(event.start).toZonedDateTimeISO(api.view.timezone)
    const end = isPlainDate(event.end) ? Temporal.PlainDate.from(event.end) : Temporal.Instant.from(event.end).toZonedDateTimeISO(api.view.timezone)

    const duration = start.until(end)
    const durationFromOrigin = origin.until(start)

    const size = Math.floor(scale * duration.total({ unit: 'minutes', relativeTo: start }))
    const startPos = Math.floor(scale * durationFromOrigin.total({ unit: 'minutes', relativeTo: origin }))
    const endPos = size + startPos

    if (endPos < 0 || startPos > props.virtualizer.getTotalSize())
      continue

    result.push({
      event,
      start: startPos,
      end: endPos,
      size: size
    })
  }

  return result
}
</script>
