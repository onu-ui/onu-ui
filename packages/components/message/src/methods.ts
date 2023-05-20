/* eslint-disable @typescript-eslint/no-use-before-define */
import { createVNode, isVNode, render } from 'vue'
import { isElement, isFunction, isString } from '@onu-ui/utils'
import { isClient } from '@vueuse/core'
import type { AppContext } from 'vue'
import { commonTheme } from '../../types'
import { useZindex } from '../../_hooks/useZIndex'
import {
  messageDefaults,
} from './type'
import MessageConstructor from './index.vue'
import { instances } from './instance'
import type {
  CreateMessageType,
  Message,
  MessageContext,
  MessageFn,
  MessageHandler,
  MessageOptions,
  MessageParams,
} from './type'

let key = 1

function normalizeOption(params?: MessageParams) {
  const options: MessageOptions = (!params || isString(params) || isVNode(params) || isFunction(params))
    ? { content: params }
    : params

  const normalizedOptions = {
    ...messageDefaults,
    ...options,
  }

  if (!normalizedOptions.appendTo) {
    normalizedOptions.appendTo = document.body
  }
  else if (isString(normalizedOptions.appendTo)) {
    let appendTo = document.querySelector<HTMLElement>(normalizedOptions.appendTo)

    // should fallback to default value with a warning
    if (!isElement(appendTo as any)) {
      // eslint-disable-next-line no-console
      console.warn('appendTo must be a valid Element String')
      appendTo = document.body
    }

    normalizedOptions.appendTo = appendTo!
  }

  return normalizedOptions as CreateMessageType
}

function createMessage({ appendTo, ...options }: CreateMessageType,
  context?: AppContext | null) {
  const { nextZIndex } = useZindex()

  const id = `message_${key++}`
  const container = document.createElement('div')
  const userOnClose = options.onClose

  const props = {
    ...options,
    zIndex: nextZIndex() + options.zIndex,
    id,
    onClose: () => {
      userOnClose?.()
      closeMessage(instance)
    },
    onDestroy: () => {
      render(null, container)
      closeMessage(instance)
    },
  }

  // render vnode
  const vnode = createVNode(
    MessageConstructor,
    props,
    (isFunction(props.content) || isVNode(props.content))
      ? { default: props.content }
      : null,
  )
  vnode.appContext = context || message._context

  render(vnode, container)

  appendTo.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const handler: MessageHandler = {
    close: () => {
      vm.exposed!.visible = false
    },
  }
  const instance: MessageContext = {
    id,
    vnode,
    handler,
    props: (vnode.component as any).props,
    vm,
  }
  return instance
}

function closeMessage(instance: MessageContext) {
  const idx = instances.indexOf(instance)
  if (idx === -1)
    return

  instances.splice(idx, 1)
  const { handler } = instance
  handler.close()
}

const message: MessageFn & Partial<Message> & { _context: AppContext | null } = (options = {}, context) => {
  if (!isClient) {
    return {
      close: () => undefined,
    }
  }

  const normalized = normalizeOption(options)
  const instance = createMessage(normalized, context)

  instances.push(instance)
  return instance.handler
}

commonTheme.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOption(options)
    return message({ ...normalized, type }, appContext)
  }
})

message._context = null

export default message as Message
