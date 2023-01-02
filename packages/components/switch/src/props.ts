import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType } from '../../types'

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
  size: {
    type: [String] as PropType<Exclude<SizeType, 'xs'>>,
    default: 'md',
    validator(val: string): boolean {
      if (!val)
        return true
      return ['sm', 'md', 'lg'].includes(val)
    },
  },
  backgroundColor: {
    type: String,
    default: '#dbdbdb',
  },
  light: {
    type: Boolean,
    default: false,
  },
} as const

export type OSwitchProps = ExtractPropTypes<typeof switchProps>
