import { Temporal } from 'temporal-polyfill'

export default function isPlainDate(value: string): boolean {
  try {
    return Temporal.PlainDate.from(value).toString() === value
  }
  catch {
    return false
  }
}
