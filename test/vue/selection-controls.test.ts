import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import Checkbox from '../../packages/vue/src/components/checkbox/index.vue'
import Switch from '../../packages/vue/src/components/switch/index.vue'

afterEach(() => {
  document.body.innerHTML = ''
})

describe.each([
  ['Checkbox', Checkbox, '.checkbox-dot', ['size-full', 'op-100']],
  ['Switch', Switch, '.switch-dot', ['translate-x-$dot-size']],
])('%s checked state', (_name, Component, indicatorSelector, checkedClasses) => {
  it('reflects modelValue on the native checked state', () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.get('input').element.checked).toBe(true)
    expect(wrapper.get(indicatorSelector).classes()).toEqual(expect.arrayContaining(checkedClasses))
  })

  it('updates modelValue when the native checked state changes', async () => {
    const wrapper = mount(Component, {
      props: {
        modelValue: false,
      },
    })

    await wrapper.get('input').setValue(true)

    expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
  })
})
