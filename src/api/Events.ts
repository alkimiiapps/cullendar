// Types
import type { Event, BuildEventsResult } from '../types'
// Utils
import toPlainDateString from '../utils/date/ToPlainDateString'
import toArray from '../utils/ToArray'
import getOrSet from '../utils/map/GetOrSet'

export default function build(events: Event[] = [], timezone: string): BuildEventsResult {
  const resourceDateMap = new Map()

  for (var i = 0; i < events.length; i++) {
    const event = events[i]
    const date = toPlainDateString(event.start, timezone)
    const resourceIds = toArray(event.resourceId)

    for (var j = 0; j < resourceIds.length; j++) {
      const resourceId = resourceIds[j]
      const dateMap = getOrSet(resourceDateMap, resourceId, new Map())
      const eventSet = getOrSet(dateMap, date, new Set())

      eventSet.add(event)
    }
  }

  return resourceDateMap
}
