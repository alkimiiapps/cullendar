<template>
  <RowVirtualiser
    :rows="rows"
    :layout="layout"
    :wrapper-style="wrapperStyle"
    :class="['cullendar-timeline', layout.timelineClass]"
    style="flex:1;overflow:scroll;">
    <template v-if="isReady" #wrapper>
      <div class="cullendar-timeline-head" style="position:sticky;top:0;z-index:1;">
        <div
          v-for="col in virtualColumns"
          :key="col.index"
          :style="toHeadStyle(col)">
          <slot name="head" v-bind="{ date: columns[col.index] }"/>
        </div>
      </div>
    </template>
    <template v-if="isReady" #default="{ row, data }">
      <div
        v-for="col in virtualColumns"
        :key="col.index"
        :style="toColStyle(row, col)">
        <slot v-bind="{ resource: data, date: columns[col.index] }"/>
      </div>
    </template>
    <template v-if="isReady" #row="{ row, data }">
      <slot name="row" v-bind="{ resource: data, row, virtualizer, size: totalSizeColumns }"/>
    </template>
  </RowVirtualiser>
</template>

<script lang="ts" setup>
// Libraries
import { ref, computed, toRefs, onMounted, onUnmounted, inject, watch, nextTick, type CSSProperties } from 'vue'
import { useVirtualizer, type VirtualItem } from '@tanstack/vue-virtual'
// Types
import type { InternalResource, InternalResourceGroup, BuildApiResult } from '../types'
// Utils
import toPx from '../utils/format/ToPx'
// API
import buildElements from '../api/Elements'
// Components
import RowVirtualiser from './RowVirtualiser.vue'

const props = defineProps<{
  rows: (InternalResource | InternalResourceGroup)[],
  columns: string[]
}>()

const api = inject('api') as BuildApiResult
const { elements, layout, callbacks, internal } = toRefs(api)

const resizeObserver = new ResizeObserver(onResize)
const isReady = ref(false)

const options = computed(() => ({
  horizontal: true,
  count: props.columns.length,
  getScrollElement: () => elements.value?.timeline,
  estimateSize,
  overscan: layout.value.overscan,
  onChange: () => {
    const timeline = elements.value?.timeline

    if (isReady.value || !timeline)
      return

    internal.value.fit(timeline.clientWidth)
    isReady.value = true

    nextTick(() => callbacks.value.onReady(api))
  }
}))

const virtualizer = useVirtualizer(options)
internal.value.virtualizer = virtualizer.value

const virtualColumns = computed(() => virtualizer.value.getVirtualItems())
const totalSizeColumns = computed(() => virtualizer.value.getTotalSize())
const wrapperStyle = computed(() => ({ width: toPx(totalSizeColumns.value) }))

onMounted(() => {
  elements.value = buildElements(internal.value.id)
  resizeObserver.observe(elements.value.timeline)
})

watch([() => internal.value.scale, () => internal.value.durations], () => virtualizer.value.measure(), { flush: 'post' })
onUnmounted(() => resizeObserver.disconnect())

function estimateSize(index: number): number {
  const date = api.view.dates.at(index)!

  return internal.value.durations.get(date)! * internal.value.scale
}
function toHeadStyle(col: VirtualItem): CSSProperties {
  return {
    height: toPx(layout.value.dayHeadSize),
    width: toPx(col.size),
    transform: `translateX(${toPx(col.start)}) translateY(0)`,
    position: 'absolute'
  }
}
function toColStyle(row: VirtualItem, col: VirtualItem): CSSProperties {
  return {
    width: toPx(col.size),
    height: toPx(row.size),
    transform: `translateX(${toPx(col.start)}) translateY(${toPx(row.start)})`,
    position: 'absolute'
  }
}
function onResize(entries: ResizeObserverEntry[]): void {
  const timeline = entries[0]

  internal.value.fit(timeline.target.clientWidth)
}
</script>
