type VNode = import('vue').VNode

export type SlotReturnValue =
  | VNode
  | string
  | boolean
  | null
  | undefined
  | SlotReturnArray
export type SlotReturnArray = Array<SlotReturnValue>
export type INodeReturnType = SlotReturnValue

export type INode<T = undefined> = T extends undefined
  ? (h: typeof import('vue').h) => INodeReturnType
  : (h: typeof import('vue').h, props: T) => INodeReturnType
export type AttachNodeReturnValue = HTMLElement | Element | Document
export type AttachNode =
  | string
  | ((triggerNode?: HTMLElement) => AttachNodeReturnValue)
export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export const commonSize = ['xs', 'sm', 'md', 'lg'] as const
export const commonPosition = ['top', 'right', 'bottom', 'left'] as const
export const commonTheme = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
] as const
export const commonPlacement = [
  'top',
  'left',
  'right',
  'bottom',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'left-top',
  'left-bottom',
  'right-top',
  'right-bottom',
] as const
export const commonTrigger = ['hover', 'click', 'focus', 'context-menu'] as const
export const commonShadowTrigger = ['hover', 'always', 'never'] as const

export type SizeType = typeof commonSize[number]
export type PositionType = typeof commonPosition[number]
export type ThemeType = typeof commonTheme[number]
export type Placement = typeof commonPlacement[number]
export type TriggerType = typeof commonTrigger[number]
export type ShadowType = typeof commonShadowTrigger[number]
