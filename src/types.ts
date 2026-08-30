import type { ComputedRef, Ref, ShallowRef, UnwrapRef, MaybeRef, MaybeRefOrGetter } from 'vue'
import type { Virtualizer as TanstackVirtualizer, ScrollToOptions } from '@tanstack/vue-virtual'

export type Virtualizer = TanstackVirtualizer<HTMLElement, Element>

export type Duration = 'days' | 'weeks' | 'months' | 'years'

export interface Event extends Record<string, any> {
  id: string,
  start: string,
  end: string,
  resourceId: string | string[]
}

export interface Resource extends Record<string, any> {
  id: string,
  nOrder?: number,
  isEventDroppable?: boolean,
  resources?: Resource[]
}

export interface InternalResource {
  id: string,
  nOrder?: number,
  isEventDroppable: boolean,
  maxEvents: number,
  data: Record<string, any>
}

export interface InternalResourceGroup {
  id: string,
  nOrder?: number,
  isGroup: true,
  isCollapsed: boolean,
  resources: InternalResource[],
  data: Record<string, any>,
  open: () => void,
  close: () => void
}

export interface DefaultOptions {
  unit: Duration,
  period: Duration,
  timezone: string,
  span: number,
  daySize: number,
  dayHeadSize: number,
  eventSize: number,
  resourceGroupSize: number,
  gap: number,
  overscan: number
}

export interface BuildApiOptions {
  view?: MaybeRefOrGetter<BuildViewOptions>,
  layout?: MaybeRefOrGetter<BuildLayoutOptions>,
  events?: MaybeRefOrGetter<Event[]>,
  resources?: MaybeRefOrGetter<Resource[]>,
  callbacks?: MaybeRefOrGetter<BuildCallbacksOptions>
}

export interface BuildApiResult extends UnwrapRef<{
  id: Ref<string>,
  elements: Ref<BuildElementsResult>,
  view: ComputedRef<BuildViewResult>,
  layout: ComputedRef<BuildLayoutResult>,
  events: ComputedRef<BuildEventsResult>,
  resources: ComputedRef<BuildResourcesResult>,
  callbacks: ComputedRef<BuildCallbacksResult>,
  utils: BuildUtilsResult,
  resizeDatesSet: Ref<Set<string>>,
  resizeResourcesSet: Ref<Set<string>>,
  unitWidth: Ref<number>,
  virtualizer: ShallowRef<Virtualizer | undefined>
}> {}

export interface BuildViewOptions {
  unit?: MaybeRefOrGetter<Duration>,
  period?: MaybeRefOrGetter<Duration>,
  span?: MaybeRefOrGetter<number>,
  firstDayOfWeek?: MaybeRefOrGetter<number>,
  date?: MaybeRefOrGetter<string>,
  timezone?: MaybeRefOrGetter<string>
}

export interface BuildViewResult {
  unit: Duration,
  period: Duration,
  start: string,
  end: string,
  timezone: string,
  span: number,
  firstDayOfWeek?: number,
  dates: string[]
}

export interface BuildElementsResult {
  calendar: HTMLElement,
  timeline: HTMLElement,
  resources: HTMLElement
}

export type BuildLayoutOptions = {
  [K in keyof BuildLayoutResult]?: MaybeRefOrGetter<BuildLayoutResult[K]>
}

export interface BuildLayoutResult {
  daySize: number,
  dayHeadSize: number,
  eventSize: number,
  resourceGroupSize: number,
  resourcesClass?: string,
  timelineClass?: string,
  gap: number,
  overscan: number
}

export type BuildCallbacksOptions = {
  [K in keyof BuildCallbacksResult]?: MaybeRef<BuildCallbacksResult[K]>
}

export interface BuildCallbacksResult {
  onReady: (api: BuildApiResult) => void,
  onView: (view: BuildViewResult) => void,
  onAddEvent: (payload: DragDropCallbackPayload) => void,
  onMoveEvent: (payload: DragDropCallbackPayload) => void,
  onResizeEvent: (payload: OnResizeEventCallbackPayload) => void,
  onBeforeDropEvent: (payload: DragDropCallbackPayload) => boolean,
  onDayEnter: (payload: DragDropCallbackPayload) => void
}

export interface BuildUtilsResult {
  getEvents: (resourceId: string, date?: string) => Set<Event>,
  getResource: (id: string) => Resource | undefined,
  scrollToDate: (date: string, options?: ScrollToOptions) => void
}

export type DateEventsMap = Map<string, Set<Event>>

export type BuildEventsResult = Map<string, DateEventsMap>

export type BuildResourcesResult = Map<string, InternalResourceGroup | InternalResource>

export interface ResizeResourceBoundary {
  id: string,
  top: number,
  bottom: number
}

export interface DragDropNewTimesResult {
  start: string,
  end: string
}

export interface ToPayloadOptions {
  data?: object,
  event?: Event,
  times?: DragDropNewTimesResult
}

export interface DragDropCallbackPayload extends ToPayloadOptions {
  date: string,
  resource: InternalResource,
  view: BuildViewResult
}

export interface OnResizeEventCallbackPayload {
  event: Event,
  resource: InternalResource,
  resources: Resource[],
  date: string,
  dates: string[],
  view: BuildViewResult
}

export interface EventRow {
  event: Event,
  start: number,
  end: number,
  size: number
}
