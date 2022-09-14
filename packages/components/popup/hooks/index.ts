import { Fragment } from 'vue'
import { isString } from '@onu-ui/utils'
import type { VNode } from 'vue'

/**
 * 过滤空标签
 * @param children VNode[]
 * @returns
 */
export const filterEmpty = (children: VNode[] = []) => {
  const vnodes: VNode[] = []
  children.forEach((child) => {
    if (Array.isArray(child))
      vnodes.push(...child)
    else if (child.type === Fragment)
      vnodes.push(...filterEmpty(child.children as VNode[]))
    else
      vnodes.push(child)
  })
  return vnodes.filter(
    c =>
      !(
        c
        && ((typeof Comment !== 'undefined' && c.type === Comment)
          || (c.type === Fragment && c.children?.length === 0)
          || (c.type === Text && (c.children as string).trim() === ''))
      ),
  )
}

function isContentRectChanged(rect1: DOMRectReadOnly, rect2: DOMRectReadOnly) {
  if (!rect1 || !rect2) return
  if (['width', 'height', 'x', 'y'].some(k => rect1[k] !== rect2[k]))
    return true

  return false
}

/** 监听元素边界变化,触发回调 */
export const observeResize = (el: HTMLElement, cb: (rect: DOMRectReadOnly) => void) => {
  if (!el || !window?.ResizeObserver) return

  let prevContentRect = null as unknown as DOMRectReadOnly
  const observer = new ResizeObserver((entries = []) => {
    const { contentRect } = entries[0]
    if (isContentRectChanged(contentRect, prevContentRect)) {
      prevContentRect = contentRect
      cb(contentRect)
      return
    }

    if (!prevContentRect)
      prevContentRect = contentRect
  })

  observer.observe(el)
  return function() {
    observer.unobserve(el)
  }
}

export const useObserverResize = (
  elm: () => HTMLElement,
  cb: (rect: DOMRectReadOnly) => void,
) => {
  let cleanObserveResize: ReturnType<typeof observeResize>
  onMounted(() => {
    cleanObserveResize = observeResize(elm(), cb)
  })

  onUnmounted(() => {
    cleanObserveResize?.()
  })
}

/**
 * 获取挂在的父节点，默认为body节点，若为 string 则查找节点
 * @param node
 * @param triggerNode
 * @returns
 */
export const getAttach = (node: any, triggerNode?: any): HTMLElement | null => {
  const attachNode = typeof node === 'function' ? node(triggerNode) : node
  if (!attachNode)
    return document.body

  if (isString(attachNode))
    return document.querySelector(attachNode)

  if (attachNode instanceof HTMLElement)
    return attachNode

  return document.body
}
