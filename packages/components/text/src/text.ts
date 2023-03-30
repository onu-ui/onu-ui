import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType, ThemeType } from '../../types'

type FontType = 'normal' | 'block' | 'bold' | 'italic' | 'sub' | 'sup' | 'under' | 'del' | 'mark'

export const fontMap = {
  normal: 'span',
  block: 'p',
  bold: 'b',
  italic: 'i',
  sub: 'sub',
  sup: 'sup',
  under: 'ins',
  del: 'del',
  mark: 'mark',
} as const

export const textProps = {
  type: {
    type: String as PropType<ThemeType>,
    default: '',
  },
  size: {
    type: String as PropType<SizeType>,
    default: '',
  },
  truncated: Boolean,
  tag: {
    type: String,
    default: 'span',
  },
  /**
   * @direction alias for tag
   */
  font: {
    type: String as PropType<FontType>,
    default: '',
  },
  gradient: {
    type: String,
    default: undefined,
  },
} as const

export type OTextProps = ExtractPropTypes<typeof textProps>
