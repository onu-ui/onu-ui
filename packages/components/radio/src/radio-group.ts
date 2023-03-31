import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType } from '../../types'
import { radioEmits } from './radio'

export const radioGroupProps = {
  /**
   * @description Native id attribute.
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description The size of radio buttons or bordered radios.
   */
  size: {
    type: String as PropType<SizeType>,
    default: 'md',
  },
  /**
   * @description Whether the nesting radios are disabled.
   */
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  fill: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: undefined,
  },
  textColor: {
    type: String,
    default: '',
  },
  notTextColor: Boolean,
  labelColor: {
    type: String,
    default: '',
  },
  /**
   * @description Native name attribute.
   */
  name: {
    type: String,
    default: undefined,
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
}

export type ORadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type ORadioGroupEmits = typeof radioGroupEmits
