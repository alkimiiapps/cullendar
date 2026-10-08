// Libraries
import { ref, computed, reactive, toValue, watch } from 'vue'
// Types
import type { BuildApiOptions, BuildApiResult } from '../types'
// API
import buildView from './View'
import buildLayout from './Layout'
import buildEvents from './Events'
import buildResources from './Resources'
import buildCallbacks from './Callbacks'
import buildUtils from './Utils'
import buildInternal from './Internal'

export default function create(options: BuildApiOptions = {}): BuildApiResult {
  const elements = ref()

  const view = computed(() => buildView(toValue(options.view)))
  const layout = computed(() => buildLayout(toValue(options.layout)))

  const events = computed(() => buildEvents(toValue(options.events), view.value.timezone))
  const resources = computed(() => buildResources(toValue(options.resources), events.value))

  const callbacks = computed(() => buildCallbacks(toValue(options.callbacks)))

  const internal = buildInternal(view, layout)
  const utils = buildUtils(view, events, resources, internal)

  watch(view, () => callbacks.value.onView(view.value))

  const api: BuildApiResult = reactive({
    elements,
    view,
    layout,
    events,
    resources,
    callbacks,
    utils,
    internal
  })

  return api
}
