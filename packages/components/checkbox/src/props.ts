import type { ExtractPropTypes, PropType } from 'vue'

export const checkBoxProps = {
  modelValue: Boolean,
  disabled: Boolean,
  label: String,
  icon: {
    type: String,
    default: 'i-carbon-checkmark',
  },
  size: {
    type: String as PropType<'md' | 'lg'>,
    default: 'md',
  },
}

export type OCheckBoxProps = ExtractPropTypes<typeof checkBoxProps>
