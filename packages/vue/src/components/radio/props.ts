import type { ExtractPropTypes, PropType } from 'vue'
import { disabled, sizeable } from '@/composables/useProps'

const baseProps = {
  size: sizeable,
  disabled,
  name: {
    type: String,
  },
  shape: {
    type: String as () => 'circle' | 'square',
    default: 'circle',
  },
  modelValue: {
    type: [String, Number, Boolean],
  },
}

export const radioProps = {
  ...baseProps,
  value: {
    type: [String, Number, Boolean],
  },
}

export const radioGroupProps = {
  ...baseProps,
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  options: {
    type: Array as PropType<Array<{ value: string | number | boolean, label?: string, disabled?: boolean }>>,
    required: true,
  },
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
