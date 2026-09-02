<template>
  <div ref="el" class="cullendar-row-virtualiser">
    <div class="cullendar-row-virtualiser-wrapper" :style="wrapperStyle">
      <slot name="wrapper"/>
      <slot
        v-for="row in virtualRows"
        :key="row.index"
        v-bind="{ row, data: rows[row.index] }"/>
    </div>
    <div class="cullendar-rows-wrapper" :style="wrapperStyle">
      <slot
        v-for="row in virtualRows"
        :key="row.index"
        v-bind="{ row, data: rows[row.index] }"
        name="row"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Libraries
import { ref, computed, watch, type CSSProperties } from 'vue'
import { useVirtualizer } from '@tanstack/vue-virtual'
// Types
import type { InternalResource, InternalResourceGroup, BuildLayoutResult } from '../types'
// Utils
import toPx from '../utils/format/ToPx'

const props = defineProps<{
  rows: (InternalResource | InternalResourceGroup)[],
  layout: BuildLayoutResult,
  wrapperStyle?: object
}>()

const el = ref<HTMLElement | null>(null)

const options = computed(() => ({
  count: props.rows.length,
  getScrollElement: () => el.value,
  estimateSize,
  gap: props.layout.gap,
  paddingStart: props.layout.dayHeadSize,
  overscan: props.layout.overscan
}))

const virtualizer = useVirtualizer(options)

const virtualRows = computed(() => virtualizer.value.getVirtualItems())
const totalSize = computed(() => virtualizer.value.getTotalSize())
const wrapperStyle = computed<CSSProperties>(() => ({
  height: toPx(totalSize.value),
  ...props.wrapperStyle
}))

watch(() => props.rows, () => virtualizer.value.measure())

function estimateSize(index: number): number {
  const resource = props.rows[index]

  if ('isGroup' in resource)
    return props.layout.resourceGroupSize

  return resource.maxEvents * props.layout.eventSize
}
</script>

<style scoped>
  .cullendar-row-virtualiser, .cullendar-row-virtualiser-wrapper {
    position: relative;
  }
  .cullendar-rows-wrapper {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }
</style>
