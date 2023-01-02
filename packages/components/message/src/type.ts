import { isClient } from '@vueuse/core'
import type { AppContext, ComponentInternalInstance, ExtractPropTypes, PropType, VNode } from 'vue'
import type { Mutable, ThemeType } from './../../types'

export const messageDefaults = {
  id: '',
  type: 'primary',
  content: '',
  closable: false,
  duration: 3000,
  appendTo: isClient ? document.body : undefined as never,
  onClose: undefined,
  icon: null,
  zIndex: 0,
  parseHtml: false,
  offset: 16,
} as const

export const messageProps = {
  id: {
    type: String,
    default: messageDefaults.id,
  },
  /** Theme */
  type: {
    type: String as PropType<ThemeType>,
    default: messageDefaults.type,
  },
  /** Message content */
  content: {
    type: [String, Object, Function] as PropType<string | VNode | (() => VNode)>,
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
  onClose: {
    type: Function as PropType<() => void>,
    required: messageDefaults.onClose,
  },
  icon: {
    type: String,
    default: messageDefaults.icon,
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex,
  },
  parseHtml: {
    type: Boolean,
    default: messageDefaults.parseHtml,
  },
  offset: {
    type: Number,
    default: messageDefaults.offset,
  },
}
export type OMessageProps = ExtractPropTypes<typeof messageProps>

export const messageEmits = {
  destroy: () => true,
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type MessageEmits = typeof messageEmits

export type MessageOptions = Partial<Mutable<Omit<OMessageProps, 'id'> & {
  appendTo?: HTMLElement | string
}>>

export type CreateMessageType = Omit<OMessageProps, 'id'> & {
  appendTo: HTMLElement
}

export type MessageParams = MessageOptions | MessageOptions['content']
export type MessageOptionsWithType = Omit<MessageOptions, 'type'>
export type MessageParamsWithType = MessageOptionsWithType | MessageOptions['content']
export interface MessageHandler {
  close: () => void
}

export type MessageTypedFn = (options?: MessageParamsWithType, appContext?: null | AppContext) => MessageHandler

export interface MessageFn {
  (options?: MessageParams, appContext?: null | AppContext): MessageHandler
}

export interface Message extends MessageFn {
  success: MessageTypedFn
  error: MessageTypedFn
  warning: MessageTypedFn
  info: MessageTypedFn
  primary: MessageTypedFn
  secondary: MessageTypedFn
}

export interface MessageContext {
  id: string
  vnode: VNode
  handler: MessageHandler
  props: Mutable<OMessageProps>
  vm: ComponentInternalInstance
}
