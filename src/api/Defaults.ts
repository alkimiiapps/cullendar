import type { DefaultOptions } from '../types'

const DEFAULTS: DefaultOptions = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  period: 'weeks',
  span: 1,
  firstDayOfWeek: 1,
  daySize: 160,
  dayHeadSize: 32,
  eventSize: 48,
  resourceGroupSize: 24,
  gap: 0,
  overscan: 0
}

export default DEFAULTS
