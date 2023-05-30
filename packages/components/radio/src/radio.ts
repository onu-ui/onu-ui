import type { ExtractPropTypes, PropType } from 'vue'
import { isBoolean, isNumber, isString } from '@onu-ui/utils'
import type { SizeType, ThemeType } from '../../types'

export const radioPropsBase = {
  size: {
    type: String as PropType<SizeType>,
    default: 'md',
  },
  // TextColor and fill are consistent. If labelColor is not the default value, textColor and fill are consistent with labelColor.
  /**
   * @direction The fill color when the radio is activated
   */
  fill: {
    type: String as PropType<ThemeType>,
    default: 'primary',
  },
  /**
   * @direction The color of the text when radio is activated
   */
  textColor: {
    type: String as PropType<ThemeType | undefined>,
    default: undefined,
  },
  /**
   * @direction Disable text discoloration when radio is activated
   */
  notTextColor: Boolean,
  /**
   * @direction The color of the text when radio is not activated
   */
  labelColor: {
    type: String as PropType<ThemeType | undefined>,
    default: undefined,
  },
  disabled: Boolean,
  /**
   * @description The value of Radio.
   */
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
}

export const radioProps = {
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  /**
   * @description Native name attribute.
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * @description Whether to add a border around Radio.
   */
  border: Boolean,
}

export type ORadioProps = ExtractPropTypes<typeof radioProps>

export const radioEmits = {
  'update:modelValue': (val: string | number | boolean) => isString(val) || isNumber(val) || isBoolean(val),
  'change': (val: string | number | boolean) => isString(val) || isNumber(val) || isBoolean(val),
}
export type ORadioEmits = typeof radioEmits
