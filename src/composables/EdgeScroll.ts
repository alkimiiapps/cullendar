import { ref, type Ref } from 'vue'

interface UseEdgeScrollResult {
  scrolledX: Ref<number>,
  scrolledY: Ref<number>,
  start: () => void,
  stop: () => void
}

const EDGE_WIDTH = 100
const MAX_SPEED = 60
const SMOOTHING = 0.1

export default function useEdgeScroll(el: HTMLElement): UseEdgeScrollResult {
  const scrolledX = ref(0)
  const scrolledY = ref(0)

  let rect: DOMRect
  let anim: number
  let scrollX = 0
  let scrollY = 0
  let targetVX = 0
  let targetVY = 0
  let vx = 0
  let vy = 0

  function onMousemove(e: MouseEvent): void {
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    scrolledX.value = el.scrollLeft - scrollX
    scrolledY.value = el.scrollTop - scrollY

    targetVX = getEdgeVelocity(x, rect.width)
    targetVY = getEdgeVelocity(y, rect.height)
  }

  function start(): void {
    rect = el.getBoundingClientRect()
    scrollX = el.scrollLeft
    scrollY = el.scrollTop

    el.addEventListener('mousemove', onMousemove)
    tick()
  }

  function stop(): void {
    el.removeEventListener('mousemove', onMousemove)
    cancelAnimationFrame(anim)

    targetVX = 0
    targetVY = 0
    vx = 0
    vy = 0
  }

  function tick(): void {
    vx = vx + (targetVX - vx) * SMOOTHING
    vy = vy + (targetVY - vy) * SMOOTHING

    if (vx !== 0 || vy !== 0)
      el.scrollBy(vx, vy)

    anim = requestAnimationFrame(tick)
  }

  return {
    scrolledX,
    scrolledY,
    start,
    stop
  }
}

function getEdgeVelocity(pos: number, edge: number): number {
  const direction = pos < EDGE_WIDTH ? -1 : pos > edge - EDGE_WIDTH ? 1 : 0
  const distance = direction === -1 ? pos : edge - pos

  return direction * MAX_SPEED * (1 - distance / EDGE_WIDTH)
}
