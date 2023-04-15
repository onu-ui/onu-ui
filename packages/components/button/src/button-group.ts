import type { ExtractPropTypes, PropType } from 'vue'
import { buttonProps } from './button'

export const buttonGroupProps = {
  type: buttonProps.type,
  size: buttonProps.size,
  modelValue: {
    type: [Number, String, Array] as PropType<number | string | number[] | string[]>,
    default: '',
  },
  multiple: Boolean,
  spacer: Boolean,
}

export type OButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
