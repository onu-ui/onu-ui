import { describe, expect, test, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { OCheckbox } from '@onu-ui/components'
const _mount = (options: any) => {
  return mount({
    components: {
      OCheckbox,
    },
    ...options,
  })
}

describe('test-o-checkbox-value', () => {
  test('init-value', async() => {
    const wrapper = _mount({
      template: `
              <div @click="checkboxVal = false" id="test_click"></div>
              <OCheckbox v-model="checkboxVal" label="checkbox"></OCheckbox>`,
      setup() {
        const checkboxVal = ref<boolean>(true)
        return {
          checkboxVal,
        }
      },
    })
    await nextTick()
    const innerInput = wrapper.find('.o-checkbox-original').element as HTMLInputElement
    expect(innerInput.value === 'true').toBeTruthy()
    wrapper.find('#test_click').trigger('click')
    await nextTick()
    expect(innerInput.value === 'false').toBeTruthy()
    expect(wrapper.vm.checkboxVal === false).toBeTruthy()
  })

  test('check-value', async() => {
    const wrapper = _mount({
      template: `
        <OCheckbox v-model="checkboxVal" label="checkbox"></OCheckbox>
              `,
      setup() {
        const checkboxVal = ref<boolean>(true)

        return {
          checkboxVal,
        }
      },
    })
    await nextTick()
    const innerInput = wrapper.find('.o-checkbox-original').element as HTMLInputElement
    expect(innerInput.value === 'true').toBeTruthy()
    wrapper.find('input').trigger('click')
    await nextTick()
    expect(innerInput.value === 'false').toBeTruthy()
    wrapper.find('input').trigger('click')
    await nextTick()
    expect(innerInput.value === 'true').toBeTruthy()
  })

  test('The bound value type is string or number, '
      + 'and false-label and true-label are not set', async() => {
    const wrapper = _mount({
      template: `
        <OCheckbox id='checkbox_num' v-model="checkboxValNum" label="checkbox"></OCheckbox>
        <OCheckbox id='checkbox_str' v-model="checkboxValStr" label="checkbox"></OCheckbox>
              `,
      setup() {
        const checkboxValNum = ref<number>(0)
        const checkboxValStr = ref<string>('string')
        return {
          checkboxValNum,
          checkboxValStr,
        }
      },
    })
    await nextTick()
    const vm = wrapper.vm
    const wrapperStrInput = wrapper.find('#checkbox_str .o-checkbox-original')
    const wrapperNumInput = wrapper.find('#checkbox_num .o-checkbox-original')
    const innerStrInput = wrapperStrInput.element as HTMLInputElement
    const innerNumInput = wrapperNumInput.element as HTMLInputElement
    expect(innerStrInput.value === 'false').toBeTruthy()
    expect(innerNumInput.value === 'false').toBeTruthy()
    expect(vm.checkboxValNum).toBe(0)
    expect(vm.checkboxValStr).toBe('string')

    wrapperStrInput.trigger('click')
    wrapperNumInput.trigger('click')
    await nextTick()
    expect(innerStrInput.value === 'true').toBeTruthy()
    expect(innerNumInput.value === 'true').toBeTruthy()
    expect(vm.checkboxValNum).toBe(true)
    expect(vm.checkboxValStr).toBe(true)

    wrapperStrInput.trigger('click')
    wrapperNumInput.trigger('click')
    await nextTick()
    expect(innerStrInput.value === 'false').toBeTruthy()
    expect(innerNumInput.value === 'false').toBeTruthy()
    expect(vm.checkboxValNum).toBe(false)
    expect(vm.checkboxValStr).toBe(false)
  })
})

describe('test-o-checkbox-props', () => {
  test('props-disabled', async() => {
    const wrapper = _mount({
      template: `
        <OCheckbox v-model="checkboxVal" label="checkbox" disabled></OCheckbox>
              `,
      setup() {
        const checkboxVal = ref<boolean>(true)

        return {
          checkboxVal,
        }
      },
    })
    await nextTick()
    const innerInput = wrapper.find('.o-checkbox-original').element as HTMLInputElement
    expect(innerInput.value === 'true').toBeTruthy()

    wrapper.find('input').trigger('click')
    await nextTick()
    expect(innerInput.value === 'true').toBeTruthy()
  })

  test('props-name', async() => {
    const wrapper = _mount({
      template: `
        <OCheckbox v-model="checkboxVal" name="checkbox-name"></OCheckbox>
              `,
      setup() {
        const checkboxVal = ref<boolean>(true)

        return {
          checkboxVal,
        }
      },
    })
    await nextTick()
    const innerInput = wrapper.find('.o-checkbox-original').element as HTMLInputElement
    expect(innerInput.name === 'checkbox-name').toBeTruthy()
  })

  test('props-indeterminate', async() => {
    const wrapper = _mount({
      template: `
        <OCheckbox v-model="checkboxVal" indeterminate></OCheckbox>
              `,
      setup() {
        const checkboxVal = ref<boolean>(true)

        return {
          checkboxVal,
        }
      },
    })
    await nextTick()
    expect(wrapper.find('.o-checkbox-indeterminate').exists()).toBeTruthy()
  })

  test('props-trueLabel & falseLabel', async() => {
    const wrapper = _mount({
      template: `
        <OCheckbox id='checkbox_num_val' v-model="checkboxValNum" :true-label="1" :false-label="0">
        </OCheckbox>
        <OCheckbox id='checkbox_str_val' v-model="checkboxValStr" true-label="string-true" false-label="string-false">
        </OCheckbox>
              `,
      setup() {
        const checkboxValNum = ref<number>(1)
        const checkboxValStr = ref<string>('string-true')
        return {
          checkboxValNum,
          checkboxValStr,
        }
      },
    })
    await nextTick()
    const vm = wrapper.vm
    const wrapperStrInput = wrapper.find('#checkbox_str_val .o-checkbox-original')
    const wrapperNumInput = wrapper.find('#checkbox_num_val .o-checkbox-original')
    const innerStrInput = wrapperStrInput.element as HTMLInputElement
    const innerNumInput = wrapperNumInput.element as HTMLInputElement
    expect(innerStrInput.value === 'true').toBeTruthy()
    expect(innerNumInput.value === 'true').toBeTruthy()
    expect(vm.checkboxValNum).toBe(1)
    expect(vm.checkboxValStr).toBe('string-true')

    wrapperStrInput.trigger('click')
    wrapperNumInput.trigger('click')
    await nextTick()
    expect(innerStrInput.value === 'false').toBeTruthy()
    expect(innerNumInput.value === 'false').toBeTruthy()
    expect(vm.checkboxValNum).toBe(0)
    expect(vm.checkboxValStr).toBe('string-false')

    wrapperStrInput.trigger('click')
    wrapperNumInput.trigger('click')
    await nextTick()
    expect(innerStrInput.value === 'true').toBeTruthy()
    expect(innerNumInput.value === 'true').toBeTruthy()
    expect(vm.checkboxValNum).toBe(1)
    expect(vm.checkboxValStr).toBe('string-true')
  })
})

describe('test-o-checkbox-event', () => {
  const handleChange = vi.fn()
  test('event:change', async() => {
    const wrapper = _mount({
      template: `
              <OCheckbox @change="testChange" v-model="checkboxVal"></OCheckbox>`,
      setup() {
        const checkboxVal = ref<boolean>(false)
        const testChange = (): void => {
          handleChange()
        }
        return {
          checkboxVal,
          testChange,
        }
      },
    })
    await wrapper.find('input').trigger('click')
    expect(handleChange).toBeCalled()
    expect(wrapper.vm.checkboxVal).toBeTruthy()
  })
})
