
import { createVNode, render } from 'vue'
import MessageConstructor from './index.vue'
import {
  messageDefaults,
  messageTypes,
} from './type'
import type {
  Message,
  MessageContext,
  MessageHandler,
  MessageTypedFn,
  OMessageProps,
} from './type'

let key = 1
// cur message instance
let curInstance: MessageContext | null = null

const createMessage = (options: OMessageProps) => {
  const id = `message_${key++}`
  const container = document.createElement('div')
  const userOnClose = options.onClose
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.()
      closeMessage(curInstance as MessageContext)
    },
    onDestroy: () => {
      render(null, container)
      curInstance = null
    },
  }
  const vnode = createVNode(MessageConstructor, props, null)

  const appendTo = document.querySelector(options.appendTo)!
  if (process.env.NODE_ENV !== 'production') {
    if (typeof Element === 'undefined' || !(appendTo instanceof Element))
      throw new Error('appendTo must be a valid Element String')
  }
  render(vnode, container)
  const vm = vnode.component!
  appendTo.appendChild(container.firstElementChild!)

  const handler: MessageHandler = {
    close: () => {
      vm.exposeProxy!.visible = false
    },
  }
  const instance: MessageContext = {
    handler,
  }
  curInstance = instance
  return instance
}

function closeMessage(instance: MessageContext) {
  instance && instance.handler.close()
}

const message: MessageTypedFn & Partial<Message> = (options: OMessageProps) => {
  const instance = createMessage(options)
  return instance.handler
}

messageTypes.forEach((type) => {
  message[type] = (options: OMessageProps) => {
    // TODO string
    if (typeof options === 'string')
      throw new Error('options can not be String')
    return message({ ...messageDefaults, ...options, type })
  }
})

export default message as Message
