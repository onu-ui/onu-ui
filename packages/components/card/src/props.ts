import type { PropType } from 'vue'
import type { ICardProps } from './type'

export default {
  /** 卡片操作区 */
  actions: {
    type: [String, Function] as PropType<ICardProps['actions']>,
  },
  /** 卡片标题 */
  title: {
    type: [String, Function] as PropType<ICardProps['title']>,
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
  /** 副标题 */
  subtitle: {
    type: [String, Function] as PropType<ICardProps['subtitle']>,
  },
  /** 悬浮阴影 */
  hoverShadow: Boolean,
  /** 阴影 */
  shadow: Boolean,
  /** 边框 */
  bordered: {
    type: Boolean,
    default: true,
  },
  /** 内容 */
  content: {
    type: [String, Function] as PropType<ICardProps['content']>,
  },
  /** 描述 */
  description: {
    type: [String, Function] as PropType<ICardProps['description']>,
  },
  /** 头部内容区 */
  header: {
    type: [String, Function] as PropType<ICardProps['header']>,
  },
  /** 底部内容区 */
  footer: {
    type: [String, Function] as PropType<ICardProps['footer']>,
  },
  /** 头部和内容区是否展示分割线 */
  headerBordered: Boolean,
}
