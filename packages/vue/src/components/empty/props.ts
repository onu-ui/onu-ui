import type { ExtractPropTypes } from 'vue'

export const emptyProps = {
  title: String,
  description: String,
} as const

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
