type VNode = import('vue').VNode

export type SlotReturnValue = VNode | string | boolean | null | undefined | SlotReturnArray
export type SlotReturnArray = Array<SlotReturnValue>
export type INodeReturnType = SlotReturnValue

export type INode<T = undefined> = T extends undefined ? (h: typeof import('vue').h) => INodeReturnType : (h: typeof import('vue').h, props: T) => INodeReturnType
export type AttachNodeReturnValue = HTMLElement | Element | Document
export type AttachNode = string | ((triggerNode?: HTMLElement) => AttachNodeReturnValue)

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'
export type PositionType = 'top' | 'right' | 'bottom' | 'left'
export type ThemeType = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type Placement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
export type TriggerType = 'hover' | 'click' | 'focus' | 'context-menu'
