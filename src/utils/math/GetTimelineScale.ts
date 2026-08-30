// Libraries
import { Temporal } from 'temporal-polyfill'
// Types
import type { BuildViewResult } from '../../types'

export default function getTimelineScale(view: BuildViewResult, width: number): number {
  const origin = Temporal.PlainDate.from(view.start)
  const end = origin.add({ [view.period]: view.span })
  const duration = origin.until(end)

  return width / duration.total({ unit: 'minutes', relativeTo: origin })
}
