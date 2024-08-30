import type { PropType } from 'vue'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' // default: md

export const disabled = { type: Boolean } as const

export const readonly = { type: Boolean } as const

export const loadable = { type: Boolean } as const

export const sizeable = {
  type: String as PropType<SizeType>,
  default: 'md',
} as const
