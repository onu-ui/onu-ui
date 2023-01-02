import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType, ThemeType } from '../../types'

export const tagProps = {
  /** theme */
  type: {
    type: String as PropType<ThemeType>,
    default: 'primary',
  },
  /** tag size */
  size: {
    type: [String] as PropType<SizeType>,
    default: 'sm',
    validator(val: string): boolean {
      if (!val)
        return true
      return ['xs', 'md', 'sm', 'lg'].includes(val)
    },
  },
  /** closable */
  closable: {
    type: Boolean,
    default: false,
  },
  /** light */
  light: {
    type: Boolean,
    default: false,
  },
  /** background-color */
  bgColor: {
    type: String,
    default: '',
  },
  /** round */
  rounded: {
    type: Boolean,
    default: false,
  },
  /** disabled */
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type OTagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type TagEmits = typeof tagEmits
