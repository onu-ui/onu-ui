import { describe, expect, test } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { OBadge } from '@onu-ui/components'

function _mount(options: any) {
  return mount({
    components: {
      OBadge,
    },
    ...options,
  })
}

describe('Badge Component', () => {
  test('basic', async () => {
    const wrapper = _mount({
      template: '<OBadge :value="99"></OBadge>',
    })
    await nextTick()
    expect(wrapper.find('.o-badge').exists()).toBeTruthy()
    expect(wrapper.find('.o-badge sup').text()).toBe('99')
  })

  test('max value', async () => {
    const wrapper = _mount({
      template: `
        <OBadge id="badgeSimple" :value="100"></OBadge>
        <OBadge id="badgeMax" :max="999" :value="1000"></OBadge>
      `,
    })
    await nextTick()
    expect(wrapper.find('#badgeSimple').exists()).toBeTruthy()
    expect(wrapper.find('#badgeMax').exists()).toBeTruthy()
    expect(wrapper.find('#badgeSimple sup').text()).toBe('99+')
    expect(wrapper.find('#badgeMax sup').text()).toBe('999+')
  })

  test('dot', async () => {
    const wrapper = _mount({
      template: '<OBadge dot :value="99"></OBadge>',
    })
    await nextTick()
    expect(wrapper.find('.o-badge').exists()).toBeTruthy()
    expect(wrapper.find('.o-badge-sup-dot').exists()).toBeTruthy()
    expect(wrapper.find('.o-badge sup').text()).toBe('')
  })
})
