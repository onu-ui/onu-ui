import { isString } from '@onu-ui/utils'
import { isVNode } from 'vue'
import _ from 'lodash'
import type { ComponentInternalInstance, VNode } from 'vue'

export type renderOptions = VNode | string

function handleSlots(instance: ComponentInternalInstance, name: string) {
  // 检查是否存在 驼峰命名 的插槽
  let node = instance.slots[_.camelCase(name)]?.()
  if (node) return node
  // 检查是否存在 中划线命名 的插槽
  node = instance.slots[_.kebabCase(name)]?.()
  if (node) return node
  return null
}

/**
 * 渲染 INode 核心方法，默认优先级 Props 大于 插槽，如果 Props 为 true，则使用插槽渲染，若无插槽 Props 为 true 渲染 defaultNode
 * @returns
 */
export const renderINode = () => {
  const instance = getCurrentInstance()!
  return function(name: string, options?: renderOptions) {
    let defaultNode
    let propsNode: any

    if (isVNode(options) || isString(options))
      defaultNode = options
    if (Object.keys(instance?.props).includes(name))
      propsNode = instance?.props[name]

    if (propsNode === false) return
    if (propsNode === true)
      return handleSlots(instance, name) || defaultNode

    if (_.isFunction(propsNode))
      return propsNode(h, {})
    if ([undefined, '', {}].includes(propsNode) && (instance.slots[_.camelCase(name)] || instance.slots[_.kebabCase(name)]))
      return handleSlots(instance, name)
    return propsNode
  }
}
