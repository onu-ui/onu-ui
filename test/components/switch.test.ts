import { describe, expect, test } from 'vitest'
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { OSwitch } from '@onu-ui/components'

function _mount(options: any) {
  return mount({
    components: {
      OSwitch,
    },
    ...options,
  })
}

describe('Switch Component', () => {
  test('modelValue', async () => {
    const switchVal = ref(true)
    const wrapper = _mount({
      template: `
              <div @click="switchVal = false" id="test_click"></div>
              <OSwitch v-model="switchVal"></OSwitch>`,
      setup() {
        return {
          switchVal,
        }
      },
    })
    await nextTick()
    expect(switchVal.value).toBeTruthy()
    expect(wrapper.find('.o-switch').exists()).toBeTruthy()
    wrapper.find('#test_click').trigger('click')
    await nextTick()
    expect(wrapper.find('.o-switch').exists()).toBeTruthy()
    expect(switchVal.value).toBeFalsy()
  })

  test('size', async () => {
    const wrapper = mount(OSwitch, {
      props: {
        size: 'sm',
      },
    })
    await nextTick()
    expect(wrapper.find('.o-switch-sm').exists()).toBeTruthy()
  })

  test('disabled', async () => {
    const switchDisabled = ref(true)
    const wrapper = _mount({
      template: `
                <div @click="switchDisabled = !switchDisabled" id="testToggle"></div>
                <OSwitch :disabled="switchDisabled" id="testDisabled"></OSwitch>`,
      setup() {
        return {
          switchDisabled,
        }
      },
    })
    await nextTick()
    expect(switchDisabled.value).toBeTruthy()
    expect(wrapper.find('#testToggle').exists()).toBeTruthy()
    expect(wrapper.find('#testDisabled').attributes('disabled')).toBeDefined()
    wrapper.find('#testToggle').trigger('click')
    await nextTick()
    expect(wrapper.find('#testDisabled').attributes('disabled')).toBeUndefined()
    expect(switchDisabled.value).toBeFalsy()
  })
})
