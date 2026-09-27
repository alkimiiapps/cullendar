import type { BuildElementsResult } from '../types'

export default function build(id: string): BuildElementsResult {
  const calendar = document.getElementById(id) as HTMLElement

  return {
    calendar,
    timeline: calendar.querySelector('.cullendar-timeline') as HTMLElement,
    resources: calendar.querySelector('.cullendar-resources') as HTMLElement
  }
}
