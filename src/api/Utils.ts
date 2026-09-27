import type { ComputedRef } from 'vue'
import type { Event, Resource, BuildViewResult, BuildEventsResult, BuildResourcesResult, BuildUtilsResult, BuildInternalResult } from '../types'
import type { ScrollToOptions } from '@tanstack/vue-virtual'
import { Temporal } from 'temporal-polyfill'

export default function build(view: ComputedRef<BuildViewResult>, events: ComputedRef<BuildEventsResult>, resources: ComputedRef<BuildResourcesResult>, internal: BuildInternalResult): BuildUtilsResult {
  function getEvents(resourceId: string, date?: string): Set<Event> {
    const resourceEvents = events.value.get(resourceId) || new Map()

    if (!date)
      return new Set(Array.from(resourceEvents.values()).flatMap(v => [...v]))

    return resourceEvents.get(date) || new Set()
  }

  function getResource(id: string): Resource | undefined {
    return resources.value.get(id)
  }

  function scrollToDate(date: string, options?: ScrollToOptions): void {
    const origin = Temporal.PlainDate.from(view.value.start)
    const plainDate = Temporal.PlainDate.from(date)

    const durationFromOrigin = origin.until(plainDate)
    const startPos = Math.floor(internal.scale.value * durationFromOrigin.total({ unit: 'minutes', relativeTo: origin }))

    internal.virtualizer.value!.scrollToOffset(startPos, options)
  }

  return {
    getResource,
    getEvents,
    scrollToDate
  }
}
