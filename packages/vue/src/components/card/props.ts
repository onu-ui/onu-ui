import type { ExtractPropTypes } from 'vue'

export const cardProps = {
  title: String,
  description: String,
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
