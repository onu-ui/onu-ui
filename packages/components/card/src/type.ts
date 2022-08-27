import type { INode, SizeType } from '../../types'

export interface ICardProps {
  /** 卡片操作区 */
  actions?: string | INode
  /** 卡片标题 */
  title?: string | INode
  /** 卡片大小，支持 md，sm */
  size?: Exclude<SizeType, 'xs' | 'lg'>
  /** 副标题 */
  subtitle?: string | INode
  /** 悬浮阴影 */
  hoverShadow?: boolean
  /** 阴影 */
  shadow?: boolean
  /** 边框 */
  bordered?: boolean
  /** 内容 */
  content?: string | INode
  /** 描述 */
  description?: string | INode
  /** 头部内容区 */
  header?: string | INode
  /** 底部内容区 */
  footer?: string | INode
  /** 头部和内容区是否展示分割线 */
  headerBordered?: boolean
}
