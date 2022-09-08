import type { ExtractPropTypes, PropType } from 'vue'
import type { ThemeType } from '../../types'

export const messageDefaults = {
  type: '',
  content: '',
  closable: false,
  duration: 3000,
  appendTo: 'body',
  onClose: undefined,
  icon: '',
} as const

export const messageProps = {
  /** Theme */
  type: {
    type: String as PropType<ThemeType>,
    default: messageDefaults.type,
  },
  /** Message content */
  content: {
    type: String,
    default: messageDefaults.content,
  },
  /** closable */
  closable: {
    type: Boolean,
    default: messageDefaults.closable,
  },
  /** duration ms */
  duration: {
    type: Number,
    default: messageDefaults.duration,
  },
  appendTo: {
    type: String,
    default: messageDefaults.appendTo,
  },
  onClose: {
    type: Function as PropType<() => void>,
    required: messageDefaults.onClose,
  },
  icon: {
    type: String,
    default: messageDefaults.icon,
  },
}
export type OMessageProps = ExtractPropTypes<typeof messageProps>

export const messageEmits = {
  destroy: () => true,
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type MessageEmits = typeof messageEmits
// Fun
export const messageTypes = ['success', 'info', 'warning', 'error', 'primary', 'secondary'] as const

export type MessageOptions = OMessageProps | OMessageProps['content']
export interface MessageHandler{
  close: () => void
}

export type MessageTypedFn = (options: OMessageProps) => MessageHandler

export interface Message {
  success: MessageTypedFn
  error: MessageTypedFn
  warning: MessageTypedFn
  info: MessageTypedFn
  primary: MessageTypedFn
  secondary: MessageTypedFn
}

export interface MessageContext {
  handler: MessageHandler
}
