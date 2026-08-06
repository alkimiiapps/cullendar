// Libraries
import { Temporal } from 'temporal-polyfill'
// Utils
import isPlainDate from './IsPlainDate'

export default function toPlainDateString(date: string, timezone: string): string {
  return isPlainDate(date) ? date : Temporal.Instant.from(date).toZonedDateTimeISO(timezone).toPlainDate().toString()
}
