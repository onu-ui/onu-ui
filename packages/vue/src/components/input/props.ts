import type { ExtractPropTypes, PropType } from 'vue'
import { disabled, readonly, sizeable } from '@/composables/useProps'

export const inputProps = {
  size: sizeable,
  disabled,
  readonly,
  id: String,
  name: String,
  type: {
    type: String as PropType<'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'>,
    default: 'text',
  },
  placeholder: String,
  dashed: Boolean,
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
