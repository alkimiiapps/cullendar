<template>
  <slot v-bind="{ row, resource, virtualizer, eventRows }"/>
</template>

<script lang="ts" setup>
// Libraries
import { computed, inject } from 'vue'
import { Temporal } from 'temporal-polyfill'
// Types
import type { Virtualizer, Event, Resource, BuildApiResult, EventRow } from '../types'
import type { VirtualItem } from '@tanstack/vue-virtual'
// Utils
import isPlainDate from '../utils/date/IsPlainDate'

const props = defineProps<{
  row: VirtualItem,
  resource: Resource,
  virtualizer: Virtualizer,
  size: number
}>()

const api = inject('api') as BuildApiResult

const eventRows = computed(() => build(api.utils.getEvents(props.resource.id), props.size))

function build(values: Set<Event>, size: number): EventRow[] {
  const result: EventRow[] = []

  const plainDateOrigin = Temporal.PlainDate.from(api.view.start)
  const zonedOrigin = plainDateOrigin.toZonedDateTime(api.view.timezone)

  const events = Array.from(values.values())

  for (let i = 0; i < events.length; i++) {
    const event = events[i]

    const isDateOnly = isPlainDate(event.start) && isPlainDate(event.end)
    const origin = isDateOnly ? plainDateOrigin : zonedOrigin

    const start = isDateOnly ? Temporal.PlainDate.from(event.start) : Temporal.Instant.from(event.start).toZonedDateTimeISO(api.view.timezone)
    const end = isDateOnly ? Temporal.PlainDate.from(event.end) : Temporal.Instant.from(event.end).toZonedDateTimeISO(api.view.timezone)

    const duration = start.until(end)
    const durationFromOrigin = origin.until(start)

    const eventSize = Math.floor(api.internal.scale * duration.total({ unit: 'minutes', relativeTo: start }))
    const startPos = Math.floor(api.internal.scale * durationFromOrigin.total({ unit: 'minutes', relativeTo: origin }))
    const endPos = startPos + eventSize

    if (endPos <= 0 || startPos >= size)
      continue

    const clippedStart = Math.max(startPos, 0)
    const clippedEnd = Math.min(endPos, size)
    const clippedSize = clippedEnd - clippedStart

    result.push({
      event,
      start: clippedStart,
      end: clippedEnd,
      size: clippedSize
    })
  }

  return result
}
</script>
