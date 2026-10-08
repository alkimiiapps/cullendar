// Libraries
import { shallowRef, ref, computed, type ComputedRef } from 'vue'
import { Temporal } from 'temporal-polyfill'
// Types
import type { BuildViewResult, BuildLayoutResult, BuildInternalResult, Virtualizer } from '../types'
// Utils
import randomString from '../utils/string/Random'

const MINUTES_PER_DAY = 1440
const MINUTES_PER_UNIT = new Map([['days', MINUTES_PER_DAY], ['weeks', MINUTES_PER_DAY * 7]])

export default function build(view: ComputedRef<BuildViewResult>, layout: ComputedRef<BuildLayoutResult>): BuildInternalResult {
  const id = randomString()
  const dataTransferType = 'application/x-cullendar-drag-event'

  const virtualizer = shallowRef<Virtualizer>()
  const viewportWidth = ref(0)

  const isDragging = ref(false)
  const isResizing = ref(false)

  const resizeDates = ref(new Set<string>())
  const resizeResources = ref(new Set<string>())

  const durations = computed(() => buildDurations(view.value))
  const scale = computed(() => calculateScale(layout.value.daySize, viewportWidth.value, durations.value))

  function fit(value: number): void {
    viewportWidth.value = value
  }

  return {
    id,
    dataTransferType,
    isDragging,
    isResizing,
    virtualizer,
    scale,
    durations,
    resizeDates,
    resizeResources,
    fit
  }
}

function buildDurations(view: BuildViewResult): Map<string, number> {
  const result = new Map()
  const cachedDuration = MINUTES_PER_UNIT.get(view.unit)

  for (var i = 0; i < view.dates.length; i++) {
    const val = view.dates[i]

    if (cachedDuration) {
      result.set(val, cachedDuration)
      continue
    }

    const date = Temporal.PlainDate.from(val)
    const next = date.add({ [view.unit]: 1 })
    const days = date.until(next, { largestUnit: 'days' }).days

    result.set(val, days * MINUTES_PER_DAY)
  }

  return result
}

function calculateScale(daySize: number, viewport: number, durations: Map<string, number>): number {
  const duration = Math.max(Array.from(durations.values()).reduce((total, mins) => total + mins, 0), 1)
  const min = Math.max(daySize, 1) / (24 * 60)
  const fit = viewport / duration

  return Math.max(min, fit)
}
