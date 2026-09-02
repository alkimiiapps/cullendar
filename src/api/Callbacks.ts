// Libraries
import { unref } from 'vue'
// Types
import type { BuildCallbacksOptions, BuildCallbacksResult } from '../types'

export default function build(options: BuildCallbacksOptions = {}): BuildCallbacksResult {
  return {
    onReady: unref(options.onReady) ?? (() => {}),
    onView: unref(options.onView) ?? (() => {}),
    onAddEvent: unref(options.onAddEvent) ?? (() => {}),
    onMoveEvent: unref(options.onMoveEvent) ?? (() => {}),
    onResizeEvent: unref(options.onResizeEvent) ?? (() => {}),
    onBeforeDropEvent: unref(options.onBeforeDropEvent) ?? (() => true),
    onDayEnter: unref(options.onDayEnter) ?? (() => {})
  }
}
