import { describe, expect, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

import { OButton, OButtonGroup } from '@onu-ui/components'

describe('o-button-group', () => {
  test('o-button-group render test', () => {
    const buttonWrapper = shallowMount(OButton, { slots: { default: 'Test' } })
    const wrapper = mount(OButtonGroup, { slots: { default: () => buttonWrapper.html() } })

    expect(wrapper.html()).toContain('Test')
  })
  test('render the correct amount of buttons', () => {
    const buttons = [1, 2, 3].map(() => OButton)

    const wrapper = mount(OButtonGroup, {
      slots: {
        default: buttons,
      },
    })

    const renderedButtons = wrapper.findAllComponents(OButton)
    expect(renderedButtons.length).toBe(buttons.length)
  })
  test('updates v-model value to the correct button clicked', async () => {
    const buttons = [1, 2, 3].map(index => shallowMount(OButton, { props: { value: index } }))

    const wrapper = mount(OButtonGroup, {
      slots: {
        default: buttons,
      },
      props: {
        'modelValue': '1',
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
      },

    })

    await wrapper.find('button:nth-child(3)').trigger('click')

    expect(wrapper.props('modelValue')).toBe(2)
  })
})
