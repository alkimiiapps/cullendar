// Libraries
import { ref, computed, reactive, toValue, watch } from 'vue'
// Types
import type { BuildApiOptions, BuildApiResult } from '../types'
// Utils
import randomString from '../utils/string/Random'
// API
import buildView from './View'
import buildLayout from './Layout'
import buildEvents from './Events'
import buildResources from './Resources'
import buildCallbacks from './Callbacks'
import buildUtils from './Utils'

export default function create(options: BuildApiOptions = {}): BuildApiResult {
  const id = randomString()
  const elements = ref()
  const resizeDatesSet = ref(new Set<string>())
  const resizeResourcesSet = ref(new Set<string>())
  const dayWidth = ref(0)

  const view = computed(() => buildView(toValue(options.view)))
  const layout = computed(() => buildLayout(toValue(options.layout)))

  const events = computed(() => buildEvents(toValue(options.events), view.value.timezone))
  const resources = computed(() => buildResources(toValue(options.resources), events.value))

  const callbacks = computed(() => buildCallbacks(toValue(options.callbacks)))
  const utils = buildUtils(events, resources)

  watch(view, () => callbacks.value.onView(view.value))

  const api: BuildApiResult = reactive({
    id,
    elements,
    view,
    layout,
    events,
    resources,
    callbacks,
    utils,
    resizeDatesSet,
    resizeResourcesSet,
    dayWidth
  })

  return api
}
