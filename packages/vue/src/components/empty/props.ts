import type { ExtractPropTypes } from 'vue'

export const emptyProps = {
  title: String,
  description: String,
} as const

export type OEmptyProps = ExtractPropTypes<typeof emptyProps>
