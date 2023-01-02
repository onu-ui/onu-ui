import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { OTag } from '@onu-ui/components'

const Tag_Content = 'Test content'
describe('o-alert', () => {
  test('alert render test', () => {
    const wrapper = mount(OTag, {
      slots: {
        default: Tag_Content,
      },
    })

    expect(wrapper.find('.o-tag-content').text()).toBe(Tag_Content)
  })

  test('light tag', () => {
    const wrapper = mount(OTag, {
      props: {
        light: true,
      },
      slots: {
        default: Tag_Content,
      },
    })

    expect(wrapper.find('.o-tag-light').exists()).toBeTruthy()
  })

  test('closable', async () => {
    const wrapper = mount(OTag, {
      props: {
        closable: true,
        o: 'secondary',
      },
      slots: {
        default: Tag_Content,
      },
    })
    const closeWrapper = wrapper.find('.o-tag-close')

    expect(wrapper.find('.o-tag-close').exists()).toBeTruthy()

    await closeWrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('color', () => {
    const wrapper = mount(OTag, {
      props: {
        bgColor: 'rgb(0, 0, 0)',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.backgroundColor).toEqual('rgb(0, 0, 0)')
  })

  test('size', () => {
    const wrapper = mount(OTag, {
      props: {
        size: 'lg',
      },
    })
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.includes('o-tag-lg')).toEqual(true)
    expect(el.className.includes('o-tag-sm')).toEqual(false)
  })
})
