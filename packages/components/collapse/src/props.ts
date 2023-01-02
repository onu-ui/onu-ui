import { generateId, isArray, isNumber, isString } from '@onu-ui/utils'
import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import type OCollapseItem from './collapseItem.vue'

export type CollapseActiveName = (string | number)[]
export type RendererElement = Record<string, any>
// props
export const collapseProps = {
  /** 手风琴 是否只允许展开一个面板 */
  accordion: {
    type: Boolean,
    default: false,
  },
  /** 展开的面板 */
  expandedNames: {
    type: [Array] as PropType<CollapseActiveName>,
    default: () => ([] as const),
  },
}

export const collapseEmits = {
  'update:expanded-names': (value: CollapseActiveName) => typeof isNumber(value) || isString(value) || isArray(value),
  'change': (value: CollapseActiveName) => typeof isNumber(value) || isString(value) || isArray(value),
}

export const collapseItemProps = {
  /** 禁用 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 标题 */
  title: {
    type: String,
    default: undefined,
  },
  /** 名称 */
  name: {
    type: [String, Number] as PropType<string | number>,
    default: () => generateId(),
  },
  /** 箭头显示的位置 */
  arrowPlacement: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
  /** icon */
  icon: {
    type: String,
    default: '',
  },

}

export type OCollapseProps = ExtractPropTypes<typeof collapseProps>
export type OCollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
export type OCollapseItemInstance = InstanceType<typeof OCollapseItem>

// key
export interface CollapseContext {
  activeNames: Ref<CollapseActiveName>
  toggleItem: (name: string | number) => void
}
export const collapseContextKey: InjectionKey<CollapseContext>
  = Symbol('collapseContextKey')
