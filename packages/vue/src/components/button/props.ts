import type { ExtractPropTypes } from 'vue'
import { sizeable } from '../../composables/useProps'

export const buttonProps = {
  to: String,
  shadow: Boolean,
  light: Boolean,
  dashed: Boolean,
  text: Boolean,
  size: sizeable,
  rounded: Boolean,
  disabled: Boolean,
  loading: Boolean,
  icon: String,
}

export const buttonGroupProps = {
  size: buttonProps.size,
  spacer: Boolean,
}

export type OButtonProps = ExtractPropTypes<typeof buttonProps>
export type OButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
