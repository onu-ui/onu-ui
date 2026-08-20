import type { ExtractPropTypes, PropType } from 'vue'
import { sizeable } from '@/composables/useProps'

export type SpinnerVariant = 'default' | 'primary' | 'muted'

export const spinnerProps = {
  size: sizeable,
  variant: {
    type: String as PropType<SpinnerVariant>,
    default: 'default',
  },
  label: {
    type: String,
    default: 'Loading',
  },
} as const

export type OSpinnerProps = ExtractPropTypes<typeof spinnerProps>
