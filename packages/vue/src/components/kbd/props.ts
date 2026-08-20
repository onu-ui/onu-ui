import type { ExtractPropTypes } from 'vue'
import { sizeable } from '@/composables/useProps'

export const kbdProps = {
  size: sizeable,
  outline: Boolean,
} as const

export type OKbdProps = ExtractPropTypes<typeof kbdProps>
