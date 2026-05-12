// Libraries
import { toValue } from 'vue'
import { Temporal } from 'temporal-polyfill'
// Types
import type { BuildViewOptions, BuildViewResult, Period } from '../types'
// API
import DEFAULTS from './Defaults'

export default function build(options: BuildViewOptions = {}): BuildViewResult {
  const period = toValue(options.period) || DEFAULTS.period
  const span = Math.max(toValue(options.span) || DEFAULTS.span, 1)
  const firstDayOfWeek = toValue(options.firstDayOfWeek) ?? DEFAULTS.firstDayOfWeek
  const timezone = toValue(options.timezone) || DEFAULTS.timezone

  const date = Temporal.PlainDate.from(toValue(options.date) || Temporal.Now.plainDateISO())
  const dates = buildDatesForPeriod(period, date, span, firstDayOfWeek)

  return {
    start: dates.at(0)!,
    end: dates.at(-1)!,
    timezone,
    period,
    span,
    firstDayOfWeek,
    dates
  }
}

function buildDatesForPeriod(period: Period, date: Temporal.PlainDate, span: number, firstDayOfWeek: number): string[] {
  if (period === 'months')
    return buildMonths(date, span)

  if (period === 'weeks')
    return buildWeeks(date, span, firstDayOfWeek)

  return buildDays(date, span)
}

function buildDays(date: Temporal.PlainDate, days: number): string[] {
  const result: string[] = []

  for (let i = 0; i < days; i++) {
    result.push(date.add({ days: i }).toString())
  }

  return result
}

function buildWeeks(date: Temporal.PlainDate, weeks: number, firstDayOfWeek: number): string[] {
  const daysFromWeekStart = (date.dayOfWeek - firstDayOfWeek + 7) % 7
  const start = date.subtract({ days: daysFromWeekStart })

  return buildDays(start, weeks * 7)
}

function buildMonths(date: Temporal.PlainDate, months: number): string[] {
  const start = date.with({ day: 1 })
  const startPlusMonths = start.add({ months: months - 1 })
  const end = startPlusMonths.with({ day: startPlusMonths.daysInMonth })

  return buildDays(start, start.until(end, { largestUnit: 'day' }).days + 1)
}
