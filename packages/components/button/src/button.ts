import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType, ThemeType } from '../../types'

export const buttonProps = {
  type: {
    type: String as PropType<ThemeType | 'default' | ''>,
    default: '',
  },
  to: String,
  shadow: Boolean,
  light: Boolean,
  dashed: Boolean,
  text: Boolean,
  size: {
    type: String as PropType<SizeType | ''>,
    default: '',
  },
  rounded: Boolean,
  disabled: Boolean,
  loading: Boolean,
  icon: String,
}

export type OButtonProps = ExtractPropTypes<typeof buttonProps>
