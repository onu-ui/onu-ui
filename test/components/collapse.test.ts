import { describe, expect, test } from 'vitest'
import { OCollapse, OCollapseItem } from '@onu-ui/components'
import { config, mount } from '@vue/test-utils'
import type { OCollapseItemInstance } from '@onu-ui/components/collapse/src/props'
import type { VueWrapper } from '@vue/test-utils'

config.global.stubs = {
  OCollapseItem,
}

// const CONTENT_TEST = 'content test'
describe('o-collapse', () => {
  test('o-collapse render test', async() => {
    const wrapper = mount(OCollapse, {
      props: {
        expandedNames: ['1'],
      },
      slots: {
        default: `
        <o-collapse-item name="1" title="title1">111</o-collapse-item>
        <o-collapse-item name="2" disabled>222</o-collapse-item>
        <o-collapse-item name="3">333</o-collapse-item>
        <o-collapse-item name="4">444</o-collapse-item>
    `,
      },
    })
    // const vm = wrapper.vm

    const collapseWrapper = wrapper.findComponent(OCollapse)
    const collapseItemWrappers = collapseWrapper.findAllComponents(
      OCollapseItem,
    ) as VueWrapper<OCollapseItemInstance>[]

    expect(collapseItemWrappers[0].vm.title).toBe('title1')
    expect(collapseItemWrappers[1].vm.disabled).toBe(true)
  })
})
