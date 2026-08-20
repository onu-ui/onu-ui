import type { ExtractPropTypes } from 'vue'
import { disabled, sizeable } from '@/composables/useProps'

export const switchProps = {
  size: sizeable,
  disabled,
  id: String,
  name: String,
} as const

export type OSwitchProps = ExtractPropTypes<typeof switchProps>
