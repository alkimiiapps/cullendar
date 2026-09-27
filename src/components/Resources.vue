<template>
  <RowVirtualiser
    v-slot="{ row, data }"
    :rows="rows"
    :layout="layout"
    :style="['overflow:scroll auto;scrollbar-width:none;', style]"
    :class="['cullendar-resources', layout.resourcesClass]">
    <div class="cullendar-resources-virtual-row" :style="toStyle(row)">
      <slot v-bind="{ resource: data }"/>
    </div>
  </RowVirtualiser>
</template>

<script lang="ts" setup>
// Libraries
import { inject, toRefs, type CSSProperties } from 'vue'
// Types
import type { VirtualItem } from '@tanstack/vue-virtual'
import type { InternalResource, InternalResourceGroup, BuildApiResult } from '../types'
// Utils
import toPx from '../utils/format/ToPx'
// Components
import RowVirtualiser from './RowVirtualiser.vue'

defineProps<{ rows: (InternalResource | InternalResourceGroup)[] }>()

const api = inject('api') as BuildApiResult
const { layout } = toRefs(api)

const style = { marginBottom: getScrollbarWidth() }

function toStyle(row: VirtualItem): CSSProperties {
  return {
    height: toPx(row.size),
    width: '100%',
    transform: `translateY(${toPx(row.start)})`,
    position: 'absolute'
  }
}
function getScrollbarWidth(): string {
  const div = Object.assign(document.createElement('div'), { style:'overflow:scroll;visibility:hidden;' })
  const el = document.body.appendChild(div)
  const width = el.offsetWidth - el.clientWidth

  el.remove()

  return toPx(width)
}
</script>
