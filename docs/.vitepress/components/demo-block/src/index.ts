import type { ExtractPropTypes } from 'vue'

export const demoProps = {
  code: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  lang: {
    type: String,
    default: 'vue',
  },
  expand: {
    type: Boolean,
    default: false,
  },
} as const

export type ODemoProps = ExtractPropTypes<typeof demoProps>
