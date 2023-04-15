import { describe, expect, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

import { OButton, OButtonGroup } from '@onu-ui/components'

describe('o-button-group', () => {
  test('o-button-group render test', () => {
    const buttonWrapper = shallowMount(OButton, { slots: { default: 'Test' } })
    const wrapper = mount(OButtonGroup, { slots: { default: () => buttonWrapper.html() } })

    expect(wrapper.html()).toContain('Test')
  })
})
