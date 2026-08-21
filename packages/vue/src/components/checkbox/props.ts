import type { ExtractPropTypes, PropType } from 'vue'
import { disabled, sizeable } from '@/composables/useProps'

export const checkboxProps = {
  size: sizeable,
  disabled,
  id: String,
  name: String,
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
  },
  indeterminate: Boolean,
} as const

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
