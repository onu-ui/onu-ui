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

export const buttonGroupProps = {
  type: buttonProps.type,
  size: buttonProps.size,
  spacer: Boolean,
}

export type OButtonProps = ExtractPropTypes<typeof buttonProps>
export type OButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
