import type { ExtractPublicPropTypes } from 'vue'

export const backtopProps = {
  target: {
    type: String,
    default: '',
  },
  delta: {
    type: Number,
    default: 200,
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
} as const

export type OBacktopProps = ExtractPublicPropTypes<typeof backtopProps>

export const backtopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type OBacktopEmits = typeof backtopEmits
