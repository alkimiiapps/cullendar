// Libraries
import { toValue } from 'vue'
// API
import DEFAULTS from './Defaults'
// Types
import type { BuildLayoutOptions, BuildLayoutResult } from '../types'

export default function build(options: BuildLayoutOptions = {}): BuildLayoutResult {
  return {
    daySize: toValue(options.daySize) ?? DEFAULTS.daySize,
    dayHeadSize: toValue(options.dayHeadSize) ?? DEFAULTS.dayHeadSize,
    eventSize: toValue(options.eventSize) ?? DEFAULTS.eventSize,
    resourceGroupSize: toValue(options.resourceGroupSize) ?? DEFAULTS.resourceGroupSize,
    resourcesClass: toValue(options.resourcesClass),
    timelineClass: toValue(options.timelineClass),
    gap: toValue(options.gap) ?? DEFAULTS.gap,
    overscan: toValue(options.overscan) ?? DEFAULTS.overscan
  }
}
