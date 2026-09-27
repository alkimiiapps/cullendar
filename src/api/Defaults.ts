import type { DefaultOptions } from '../types'

const DEFAULTS: DefaultOptions = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  unit: 'days',
  period: 'weeks',
  span: 1,
  daySize: 160,
  dayHeadSize: 32,
  eventSize: 48,
  resourceGroupSize: 24,
  overscan: 0
}

export default DEFAULTS
