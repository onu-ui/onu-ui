import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { ThemeType } from './../../types'

export const alertProps = {
  type: {
    type: String as PropType<ThemeType>,
    default: 'primary',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  closeText: {
    type: String,
    default: '',
  },
  closable: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
}

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type OAlertProps = ExtractPublicPropTypes<typeof alertProps>
