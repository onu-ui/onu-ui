type VNode = import('vue').VNode

export type SlotReturnValue = VNode | string | boolean | null | undefined | SlotReturnArray
export type SlotReturnArray = Array<SlotReturnValue>
export type INodeReturnType = SlotReturnValue

export type INode<T = undefined> = T extends undefined ? (h: typeof import('vue').h) => INodeReturnType : (h: typeof import('vue').h, props: T) => INodeReturnType

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'
