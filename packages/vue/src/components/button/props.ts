import type { ExtractPropTypes, PropType } from 'vue'
import { disabled, loadable, readonly, sizeable } from '../../composables/useProps'

export const buttonProps = {
  to: String,
  shadow: Boolean,
  light: Boolean,
  dashed: Boolean,
  text: Boolean,
  size: sizeable,
  rounded: Boolean,
  disabled,
  readonly,
  loading: loadable,
  icon: String,
  variant: {
    type: String as PropType<''>,
    default: 'md',
  },
  default: {
    type: Boolean,
    default: false,
  },
}

export const buttonGroupProps = {
  size: buttonProps.size,
  spacer: Boolean,
}

export type OButtonProps = ExtractPropTypes<typeof buttonProps>
export type OButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
