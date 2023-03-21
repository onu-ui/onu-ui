import type { ExtractPropTypes } from 'vue'

export const backtopProps = {
  target: {
    type: String,
    default: '',
  },
  visibilityHeight: {
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

export type OBacktopProps = ExtractPropTypes<typeof backtopProps>

export const backtopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type OBacktopEmits = typeof backtopEmits
