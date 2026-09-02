<template>
  <RowVirtualiser
    :rows="rows"
    :layout="layout"
    :wrapper-style="wrapperStyle"
    :class="['cullendar-timeline', layout.timelineClass]">
    <template v-if="isReady" #wrapper>
      <div class="cullendar-timeline-head">
        <div
          v-for="col in virtualColumns"
          :key="col.index"
          class="cullendar-timeline-virtual-col"
          :style="toHeadStyle(col)">
          <slot name="head" v-bind="{ date: columns[col.index] }"/>
        </div>
      </div>
    </template>
    <template v-if="isReady" #default="{ row, data }">
      <div
        v-for="col in virtualColumns"
        :key="col.index"
        class="cullendar-timeline-virtual-col"
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
import { ref, computed, toRefs, onMounted, inject, watch, type CSSProperties } from 'vue'
import { useVirtualizer, type VirtualItem } from '@tanstack/vue-virtual'
// Types
import type { Virtualizer, InternalResource, InternalResourceGroup, BuildApiResult } from '../types'
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
const { id, unitWidth, elements, layout, callbacks, virtualizer: apiVirtualizer } = toRefs(api)

const isReady = ref(false)

const options = computed(() => ({
  horizontal: true,
  count: props.columns.length,
  getScrollElement: () => elements.value?.timeline,
  estimateSize: () => unitWidth.value,
  gap: layout.value.gap,
  overscan: layout.value.overscan,
  onChange: (instance: Virtualizer) => {
    setUnitWidth(instance.scrollElement?.clientWidth ?? 0)

    if (isReady.value)
      return

    isReady.value = true
    callbacks.value.onReady(api)
  }
}))

const virtualizer = useVirtualizer(options)
apiVirtualizer.value = virtualizer.value

const virtualColumns = computed(() => virtualizer.value.getVirtualItems())
const totalSizeColumns = computed(() => virtualizer.value.getTotalSize())
const wrapperStyle = computed(() => ({ width: toPx(totalSizeColumns.value) }))

onMounted(() => elements.value = buildElements(id.value))

watch([() => props.columns.length, layout], () => virtualizer.value.measure())

function setUnitWidth(timelineWidth: number): void {
  const count = props.columns.length
  const available = timelineWidth - (layout.value.gap * (count - 1))
  const newValue = Math.max(layout.value.daySize, Math.floor(available / count))

  if (newValue === unitWidth.value)
    return

  unitWidth.value = newValue
  virtualizer.value.measure()
}
function toHeadStyle(col: VirtualItem): CSSProperties {
  return {
    height: toPx(layout.value.dayHeadSize),
    width: toPx(unitWidth.value),
    transform: `translateX(${toPx(col.start)}) translateY(0)`
  }
}
function toColStyle(row: VirtualItem, col: VirtualItem): CSSProperties {
  return {
    width: toPx(unitWidth.value),
    height: toPx(row.size),
    transform: `translateX(${toPx(col.start)}) translateY(${toPx(row.start)})`
  }
}
</script>

<style scoped>
  .cullendar-timeline {
    flex: 1;
    overflow: scroll;
  }
  .cullendar-timeline-virtual-col {
    position: absolute;
    top: 0;
    left: 0;
  }
  .cullendar-timeline-head {
    position: sticky;
    top: 0;
    z-index: 1;
  }
</style>
