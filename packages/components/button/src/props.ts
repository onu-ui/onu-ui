import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType, ThemeType } from '../../types'

export const buttonProps = {
  type: {
    type: String as PropType<ThemeType | 'default'>,
    default: 'default',
  },
  to: String,
  shadow: Boolean,
  light: Boolean,
  dashed: Boolean,
  text: Boolean,
  size: {
    type: String as PropType<SizeType>,
    default: 'md',
  },
  disabled: Boolean,
  loading: Boolean,
}

export type OButtonProps = ExtractPropTypes<typeof buttonProps>
