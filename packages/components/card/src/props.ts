import type { PropType } from 'vue'
import type { ICardProps } from './type'

export const cardProps = {
  /** 卡片标题 */
  title: {
    type: String,
  },
  /** 描述 */
  description: {
    type: String,
  },
  /** 内容 */
  content: {
    type: [String, Function] as PropType<string | INode>,
  },
  /** 封面 */
  cover: {
    type: String,
  },
  /** 卡片大小，支持 md，sm */
  size: {
    type: [String] as PropType<Exclude<SizeType, 'xs' | 'lg'>>,
    default: 'md',
    validator(val: string): boolean {
      if (!val) return true
      return ['md', 'sm'].includes(val)
    },
  },
  /** 悬浮阴影 */
  hoverable: Boolean,
  /** 边框 */
  bordered: Boolean,
  /** 头部内容区 */
  header: {
    type: [Function] as PropType<INode>,
  },
  /** 卡片右上角操作区 */
  extra: {
    type: [String, Function] as PropType<string | INode>,
  },
  /** 卡片操作区 */
  actions: {
    type: [Function] as PropType<INode>,
  },
}
