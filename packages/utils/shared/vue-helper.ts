import { cloneVNode } from 'vue'
import type { VNode } from 'vue'
import { isArray, isArrayChildren, isComponent, isElement, isFunction } from './is'

export function getChildrenArray(vn: VNode) {
  if (isArrayChildren(vn, vn.children))
    return vn.children

  if (isArray(vn))
    return vn

  return undefined
}

/**
 * Return the first element
 * @param children
 */
export function getFirstElementFromChildren(children: VNode[] | undefined): HTMLElement | undefined {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child)
      if (element)
        return element
    }
  }
  return undefined
}

/**
 * Determine the VNode type and return the corresponding element
 * @param vnode
 * @returns
 */
export function getFirstElementFromVNode(vnode: VNode): HTMLElement | undefined {
  if (isElement(vnode))
    return vnode.el as HTMLElement
  if (isComponent(vnode)) {
    if ((vnode.el as Node).nodeType === 1)
      return vnode.el as HTMLElement
    if (vnode.component?.subTree) {
      const ele = getFirstElementFromVNode(vnode.component.subTree)
      if (ele)
        return ele
    }
  }
  else {
    const children = getChildrenArray(vnode)
    return getFirstElementFromChildren(children)
  }
  return undefined
}

/**
 * merge extraProps for child
 * @param children
 * @param extraProps
 * @returns
 */
export function mergeFirstChild(children: VNode[] | undefined,
  extraProps: Record<string, any> | ((vn: VNode) => Record<string, any>)): boolean {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (isElement(child) || isComponent(child)) {
        const props = isFunction(extraProps) ? extraProps(child) : extraProps
        children[i] = cloneVNode(child, props, true)
        return true
      }
      const _children = getChildrenArray(child)
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps)
        if (result)
          return true
      }
    }
  }
  return false
}

/** whether VNode[] is empty */
export function isEmptyChildren(children?: VNode[]) {
  if (!children)
    return true
  for (const item of children) {
    if (item.children)
      return false
  }
  return true
}
