import type { ComputedRef, Ref, UnwrapRef, MaybeRef, MaybeRefOrGetter } from 'vue'

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
  dayWidth: Ref<number>
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

export interface BuildLayoutOptions {
  daySize?: MaybeRefOrGetter<number>,
  dayHeadSize?: MaybeRefOrGetter<number>,
  eventSize?: MaybeRefOrGetter<number>,
  resourceGroupSize?: MaybeRefOrGetter<number>,
  resourcesClass?: MaybeRefOrGetter<string>,
  timelineClass?: MaybeRefOrGetter<string>,
  gap?: MaybeRefOrGetter<number>,
  overscan?: MaybeRefOrGetter<number>
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

export interface BuildCallbacksOptions {
  onView?: MaybeRef<(view: BuildViewResult) => void>,
  onAddEvent?: MaybeRef<(payload: DragDropCallbackPayload) => void>,
  onMoveEvent?: MaybeRef<(payload: DragDropCallbackPayload) => void>,
  onResizeEvent?: MaybeRef<(payload: OnResizeEventCallbackPayload) => void>,
  onBeforeDropEvent?: MaybeRef<(payload: DragDropCallbackPayload) => boolean>,
  onDayEnter?: MaybeRef<(payload: DragDropCallbackPayload) => void>
}

export interface BuildCallbacksResult {
  onView: (view: BuildViewResult) => void;
  onAddEvent: (payload: DragDropCallbackPayload) => void;
  onMoveEvent: (payload: DragDropCallbackPayload) => void;
  onResizeEvent: (payload: OnResizeEventCallbackPayload) => void;
  onBeforeDropEvent: (payload: DragDropCallbackPayload) => boolean;
  onDayEnter: (payload: DragDropCallbackPayload) => void
}

export interface BuildUtilsResult {
  getEvents: (resourceId: string, date: string) => Set<Event>,
  getResource: (id: string) => Resource | undefined
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
