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
  options: {
    type: Array as PropType<Array<{ value: string | number | boolean, label?: string, disabled?: boolean }>>,
    required: true,
  },
}

export type ORadioProps = ExtractPropTypes<typeof radioProps>
