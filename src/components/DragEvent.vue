<template>
  <div
    draggable="true"
    class="cullendar-drag-event"
    style="position:relative;user-select:none;pointer-events:all;"
    @dragstart.stop="onDragstart"
    @dragend.stop="onDragend">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
// Libraries
import { toRefs, computed } from 'vue'
// Types
import type { BuildApiResult } from '../types'
// Utils
import toPx from '../utils/format/ToPx'

const props = defineProps<{
  cullendar: BuildApiResult,
  data: object | Event,
  dragClass?: string,
  ghostClass?: string
}>()

let ghost: HTMLElement | null

const { internal } = toRefs(props.cullendar)

const dragClasses = computed(() => props.dragClass?.split?.(' ') || [])
const ghostClasses = computed(() => props.ghostClass?.split?.(' ') || [])

function onDragstart(e: DragEvent): void {
  if (!e.dataTransfer)
    return

  const target = e.target as HTMLElement
  const targetRect = target.getBoundingClientRect()

  ghost = setGhost(target, targetRect)
  target.classList.add(...dragClasses.value)

  e.dataTransfer.setDragImage(ghost, e.clientX - targetRect.left, e.clientY - targetRect.top)
  e.dataTransfer.effectAllowed = 'id' in props.data ? 'move' : 'copy'
  e.dataTransfer.setData(internal.value.dataTransferType, JSON.stringify(props.data))

  requestAnimationFrame(() => internal.value.isDragging = true)
}
function onDragend(e: DragEvent): void {
  const target = e.target as HTMLElement

  target.classList.remove(...dragClasses.value)
  internal.value.isDragging = false

  if (ghost)
    ghost.remove()
}
function setGhost(el: HTMLElement, position: DOMRect): HTMLElement {
  const clone = el.cloneNode(true) as HTMLElement

  clone.classList.add('cullendar-ghost-event', ...ghostClasses.value)
  clone.style.height = toPx(position.height)
  clone.style.width = toPx(position.width)
  clone.style.position = 'fixed'
  clone.style.left = '-9999px'

  document.body.appendChild(clone)

  return clone
}
</script>
