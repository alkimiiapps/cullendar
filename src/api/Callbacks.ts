// Libraries
import { unref } from 'vue'
// Types
import type { BuildCallbacksOptions, BuildCallbacksResult, BuildViewResult, DragDropCallbackPayload, OnResizeEventCallbackPayload } from '../types'

export default function build(options: BuildCallbacksOptions = {}): BuildCallbacksResult {
  return {
    onView: unref(options.onView) || ((_: BuildViewResult) => {}),
    onAddEvent: unref(options.onAddEvent) || ((_: DragDropCallbackPayload) => {}),
    onMoveEvent: unref(options.onMoveEvent) || ((_: DragDropCallbackPayload) => {}),
    onResizeEvent: unref(options.onResizeEvent) || ((_: OnResizeEventCallbackPayload) => {}),
    onBeforeDropEvent: unref(options.onBeforeDropEvent) || ((_: DragDropCallbackPayload) => true),
    onDayEnter: unref(options.onDayEnter) || ((_: DragDropCallbackPayload) => {})
  }
}
