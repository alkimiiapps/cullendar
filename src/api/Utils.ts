import type { ComputedRef, ShallowRef } from 'vue'
import type { Event, Resource, Virtualizer, BuildViewResult, BuildEventsResult, BuildResourcesResult, BuildUtilsResult } from '../types'
import type { ScrollToOptions } from '@tanstack/vue-virtual'
import { Temporal } from 'temporal-polyfill'
// Utils
import getTimelineScale from '../utils/math/GetTimelineScale'

export default function build(view: ComputedRef<BuildViewResult>, events: ComputedRef<BuildEventsResult>, resources: ComputedRef<BuildResourcesResult>, virtualizer: ShallowRef<Virtualizer | undefined>): BuildUtilsResult {
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
    const instance = virtualizer.value!

    const scale = getTimelineScale(view.value, instance.getTotalSize())
    const durationFromOrigin = origin.until(plainDate)
    const startPos = Math.floor(scale * durationFromOrigin.total({ unit: 'minutes', relativeTo: origin }))

    instance.scrollToOffset(startPos, options)
  }

  return {
    getResource,
    getEvents,
    scrollToDate
  }
}
