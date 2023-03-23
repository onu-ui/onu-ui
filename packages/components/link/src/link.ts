import type { ExtractPropTypes, PropType } from 'vue'
import type { ThemeType } from '../../types'

export const linkProps = {
  type: {
    type: String as PropType<ThemeType | 'default'>,
    default: 'default',
  },
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
  },
} as const

export type OLinkProps = ExtractPropTypes<typeof linkProps>

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type OLinkEmits = typeof linkEmits
