import { isClient } from '@vueuse/core'
import type { CSSProperties } from 'vue'
import { camelize } from 'vue'

export function getStyle(element: HTMLElement,
  styleName: keyof CSSProperties): string {
  if (!isClient || !element || !styleName)
    return ''

  let key = camelize(styleName)
  if (key === 'float')
    key = 'cssFloat'
  try {
    const style = (element.style as any)[key]
    if (style)
      return style
    const computed: any = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[key] : ''
  }
  catch {
    return (element.style as any)[key]
  }
}
