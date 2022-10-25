import type { SizeType, ThemeType } from '../../types'
import type { ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  o: {
    type: String as PropType<ThemeType>,
    default: 'primary'
  },
  to: String,
  light: Boolean,
  text: Boolean,
  size: {
    type: String as PropType<SizeType>,
    default: 'md',
  },
  disabled: Boolean,
  loading: Boolean,
}

export type OButtonProps = ExtractPropTypes<typeof buttonProps>
