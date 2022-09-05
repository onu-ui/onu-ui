import type { ThemeType } from './../../types'
import type { ExtractPropTypes, PropType } from 'vue'

export const alertProps = {
  /** theme */
  o: {
    type: String as PropType<ThemeType>,
    default: 'primary',
  },
  /** 标题 */
  title: {
    type: String,
    default: '',
  },
  /** 正文 */
  description: {
    type: String,
    default: '',
  },
  /** 图标 */
  icon: {
    type: String,
    default: '',
  },
  /** 关闭文案 */
  closeText: {
    type: String,
    default: '',
  },
  /** 是否可关闭 */
  closeable: {
    type: Boolean,
    default: false,
  },
  /** light 风格 */
  light: {
    type: Boolean,
    default: false,
  },
  /** 内容居中 */
  center: {
    type: Boolean,
    default: false,
  },
} as const

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type OAlertProps = ExtractPropTypes<typeof alertProps>
