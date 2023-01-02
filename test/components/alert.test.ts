import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { OAlert } from '@onu-ui/components'

const ALERT_DESCRIPTION = 'Test content'
const ALERT_TITLE = 'Test title'
describe('o-alert', () => {
  test('alert render test', () => {
    const wrapper = mount(OAlert, {
      props: {
        title: ALERT_TITLE,
        description: ALERT_DESCRIPTION,
      },
    })

    expect(wrapper.find('.o-alert-description').text()).toBe(ALERT_DESCRIPTION)
    expect(wrapper.find('.o-alert-title').text()).toBe(ALERT_TITLE)
  })

  test('light alert', () => {
    const wrapper = mount(OAlert, {
      props: {
        title: ALERT_TITLE,
        description: ALERT_DESCRIPTION,
        light: true,
      },
    })

    expect(wrapper.find('.o-alert-light').exists()).toBeTruthy()
  })

  test('alert with icon', () => {
    const wrapper = mount(OAlert, {
      props: {
        title: ALERT_TITLE,
        description: ALERT_DESCRIPTION,
        icon: 'i-carbon-logo-github',
      },
    })

    expect(wrapper.find('.o-alert-icon').exists()).toBeTruthy()
    expect(wrapper.find('.o-alert-icon div').classes()).include('i-carbon-logo-github')
  })

  test('alert width close icon', async () => {
    const wrapper = mount(OAlert, {
      props: {
        title: ALERT_TITLE,
        description: ALERT_DESCRIPTION,
        closable: true,
      },
    })
    const closeWrapper = wrapper.find('.o-alert-close')

    expect(wrapper.find('.o-alert-close').exists()).toBeTruthy()
    expect(wrapper.find('.o-alert-close div').classes()).include(
      'i-carbon-close',
    )

    await closeWrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('alert width close text', async () => {
    const wrapper = mount(OAlert, {
      props: {
        title: ALERT_TITLE,
        description: ALERT_DESCRIPTION,
        closable: true,
        closeText: 'close',
      },
    })
    const closeWrapper = wrapper.find('.o-alert-close')

    expect(wrapper.find('.o-alert-close').exists()).toBeTruthy()
    expect(wrapper.find('.o-alert-close span').text()).toBe('close')
    await closeWrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('should work with `slots`', async () => {
    const wrapper = mount(OAlert, {
      slots: {
        default: 'content',
        icon: 'icon',
        close: 'close',
      },
      props: {
        closable: true,
      },
    })

    const closeWrapper = wrapper.find('.o-alert-close')

    expect(wrapper.find('.o-alert-icon').exists()).toBeTruthy()
    expect(wrapper.find('.o-alert-icon').text()).toBe('icon')

    expect(wrapper.find('.o-alert-close').exists()).toBeTruthy()
    expect(wrapper.find('.o-alert-close').text()).toBe('close')

    await closeWrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
