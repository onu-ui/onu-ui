import type { ExtractPropTypes } from 'vue'

export const rateProps = {
  modelValue: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 5,
  },
  readonly: Boolean,
  text: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'warning',
  },
  voidColor: {
    type: String,
    default: '',
  },
  allowHalf: {
    type: Boolean,
    default: false,
  },
} as const

export type ORateProps = ExtractPropTypes<typeof rateProps>
