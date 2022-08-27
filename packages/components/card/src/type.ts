import type { INode, SizeType } from '../../types'

export interface ICardProps {
  /** 卡片标题 */
  title?: string
  /** 描述 */
  description?: string
  /** 内容 */
  content?: string | INode
  /** 封面 */
  cover?: string
  /** 卡片大小，支持 md，sm */
  size?: Exclude<SizeType, 'xs' | 'lg'>
  /** 悬浮阴影 */
  hoverable?: boolean
  /** 边框 */
  bordered?: boolean
  /** 头部内容区 */
  header?: INode
  /** 卡片右上角操作区 */
  extra?: string | INode
  /** 底部操作区 */
  actions?: INode
}
