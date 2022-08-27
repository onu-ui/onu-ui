import type { PropType } from 'vue'
import type { ICardProps } from './type'

export default {
  /** 卡片标题 */
  title: {
    type: [String, Function] as PropType<ICardProps['title']>,
  },
  /** 描述 */
  description: {
    type: [String] as PropType<ICardProps['description']>,
  },
  /** 内容 */
  content: {
    type: [String, Function] as PropType<ICardProps['content']>,
  },
  /** 封面 */
  cover: {
    type: [String] as PropType<ICardProps['content']>,
  },
  /** 卡片大小，支持 md，sm */
  size: {
    type: String as PropType<ICardProps['size']>,
    default: 'md',
    validator(val: ICardProps['size']): boolean {
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
    type: [Function] as PropType<ICardProps['header']>,
  },
  /** 卡片右上角操作区 */
  extra: {
    type: [String, Function] as PropType<ICardProps['header']>,
  },
  /** 卡片操作区 */
  actions: {
    type: [Function] as PropType<ICardProps['actions']>,
  },
}
