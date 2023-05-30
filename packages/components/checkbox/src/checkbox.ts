import type { ExtractPropTypes, PropType } from 'vue'
import { isBoolean, isNumber, isString } from '@onu-ui/utils'

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: '',
  },
  disabled: Boolean,
  /**
   * @description The value of Checkbox.
   */
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  icon: {
    type: String,
    default: 'i-carbon-checkmark',
  },
  size: {
    type: String as PropType<'md' | 'lg'>,
    default: 'md',
  },
}

export type OCheckboxProps = ExtractPropTypes<typeof checkboxProps>

export const checkboxEmits = {
  'update:modelValue': (val: CheckboxValueType) => isString(val) || isNumber(val) || isBoolean(val),
  'change': (val: CheckboxValueType) => isString(val) || isNumber(val) || isBoolean(val),
}

export type OCheckboxEmits = typeof checkboxEmits
