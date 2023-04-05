import type { ExtractPropTypes } from 'vue'
import { buttonProps } from './button'

export const buttonGroupProps = {
  type: buttonProps.type,
  size: buttonProps.size,
  spacer: Boolean,
}

export type OButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
