// Libraries
import { toValue } from 'vue'
import { Temporal } from 'temporal-polyfill'
// Types
import type { BuildViewOptions, BuildViewResult, Duration } from '../types'
// API
import DEFAULTS from './Defaults'

export default function build(options: BuildViewOptions = {}): BuildViewResult {
  const period = toValue(options.period) || DEFAULTS.period
  const span = Math.max(toValue(options.span) || DEFAULTS.span, 1)
  const unit = toValue(options.unit) || DEFAULTS.unit
  const firstDayOfWeek = toValue(options.firstDayOfWeek)
  const timezone = toValue(options.timezone) || DEFAULTS.timezone

  const date = Temporal.PlainDate.from(toValue(options.date) || Temporal.Now.plainDateISO())
  const start = startOfPeriod(date, period, period === 'weeks' || unit === 'weeks' ? firstDayOfWeek : undefined)
  const dates = buildDates(start, period, span, unit)

  return {
    start: dates.at(0)!,
    end: dates.at(-1)!,
    timezone,
    unit,
    period,
    span,
    firstDayOfWeek,
    dates
  }
}

function buildDates(date: Temporal.PlainDate, period: Duration, span: number, unit: Duration): string[] {
  const result: string[] = []

  const end = date.add({ [period]: span })
  const duration = date.until(end)
  const units = duration.total({ unit, relativeTo: date })

  for (let i = 0; i < units; i++) {
    result.push(date.add({ [unit]: i }).toString())
  }

  return result
}

function startOfPeriod(date: Temporal.PlainDate, period: Duration, firstDayOfWeek?: number): Temporal.PlainDate {
  let result = date

  if (period === 'years')
    result = date.with({ day: 1, month: 1 })

  if (period === 'months')
    result = date.with({ day: 1 })

  return firstDayOfWeek === undefined ? result : result.subtract({ days: (result.dayOfWeek - firstDayOfWeek + 7) % 7 })
}
