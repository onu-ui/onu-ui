import type { ExtractPropTypes, PropType } from 'vue'
import { Metadata } from 'markdown-it-vitepress-demo'

export const demoProps = {
  sfcTsCode: {
    type: String,
    default: '',
  },
  sfcJsCode: {
    type: String,
    default: '',
  },
  sfcTsHtml: {
    type: String,
    default: '',
  },
  sfcJsHtml: {
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
  metadata: {
    type: Object as PropType<Metadata>,
    required: true as const
  },
  expand: {
    type: Boolean,
    default: false,
  },
} as const

export type ODemoProps = ExtractPropTypes<typeof demoProps>
