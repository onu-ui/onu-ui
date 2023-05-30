import type { ExtractPropTypes, PropType } from 'vue'
import { isArray } from '@onu-ui/utils'
import type { CheckboxValueType } from './checkbox'
import { checkboxProps } from './checkbox'

export const checkboxGroupProps = {
  /**
   * @description Native id attribute.
   */
  id: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: Array as PropType<CheckboxValueType[]>,
    default: [],
  },
  size: checkboxProps.size,
  /**
   * @description Whether the nesting checkboxes are disabled.
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  min: Number,
  max: Number,
}

export type OCheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupEmits = {
  'update:modelValue': (val: CheckboxValueType[]) => isArray(val),
  'change': (val: CheckboxValueType[]) => isArray(val),
}

export type OCheckboxGroupEmits = typeof checkboxGroupEmits
