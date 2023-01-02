import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import message from '@onu-ui/components/message/src/index.vue'

const MESSAGE_CONTENT = 'test message'

describe('message components', () => {
  it('message basic', () => {
    const wrapper = mount(message, {
      props: {
        content: MESSAGE_CONTENT,
      },
    })
    const vm = wrapper.vm
    expect(wrapper.text()).toEqual(MESSAGE_CONTENT)
    expect(vm.visible).toBe(true)
  })
  it('message closable', async () => {
    const wrapper = mount(message, {
      props: {
        content: MESSAGE_CONTENT,
        closable: true,
      },
    })
    const vm = wrapper.vm
    const closeBtn = wrapper.find('.o-message-closable')
    expect(wrapper.text()).toEqual(MESSAGE_CONTENT)
    // expect(closeBtn.exists()).toBe(true)
    await closeBtn.trigger('click')
    expect(vm.visible).toBe(false)
  })
  it('it should close after duration', async () => {
    vi.useFakeTimers()
    const wrapper = mount(message, {
      props: {
        content: MESSAGE_CONTENT,
        duration: 1000,
      },
    })
    const vm = wrapper.vm
    await nextTick()
    expect(vm.visible).toBe(true)
    vi.runAllTimers()
    await nextTick()
    expect(vm.visible).toBe(false)
    vi.useRealTimers()
  })
})
