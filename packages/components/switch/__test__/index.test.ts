import { describe, expect, test, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import OSwitch from '../src/index.vue'

const _mount = (options: any) => {
  return mount({
    components: {
      OSwitch,
    },
    ...options,
  })
}

describe('test-o-switch-props', () => {
  test('init-value', async() => {
    const wrapper = _mount({
      template: `
              <div @click="switchVal = false" id="test_click"></div>  
              <OSwitch v-model="switchVal"></OSwitch>`,
      setup() {
        const switchVal = ref<boolean>(true)
        return {
          switchVal,
        }
      },
    })
    await nextTick()
    expect(wrapper.find('.o-switch-check-circle').exists()).toBeTruthy()
    wrapper.find('#test_click').trigger('click')
    await nextTick()
    expect(wrapper.find('.o-switch-uncheck-circle').exists()).toBeTruthy()
  })

  test('props-size-small', () => {
    const wrapper = mount(OSwitch, {
      props: {
        size: 'small',
      },
    })
    const elm = wrapper.element as HTMLElement
    expect(elm.className.indexOf('o-switch-size-small') > 0).toBeTruthy()
  })

  test('props-size-medium', () => {
    const wrapper = mount(OSwitch, {
      props: {
        size: 'medium',
      },
    })
    const elm = wrapper.element as HTMLElement
    expect(elm.className.indexOf('o-switch-size-medium') > 0).toBeTruthy()
  })

  test('props-size-large', () => {
    const wrapper = mount(OSwitch, {
      props: {
        size: 'large',
      },
    })
    const elm = wrapper.element as HTMLElement
    expect(elm.className.indexOf('o-switch-size-large') > 0).toBeTruthy()
  })

  test('props-disabled', async() => {
    const wrapper = _mount({
      template: `
              <OSwitch v-model="varSwitch" disabled></OSwitch>`,
      setup() {
        const varSwitch = ref<boolean>(false)
        return {
          varSwitch,
        }
      },
    })
    await wrapper.find('.o-switch').trigger('click')
    expect(!wrapper.vm.varSwitch).toBeTruthy()
  })

  test('props-isLoading', async() => {
    const wrapper = _mount({
      template: `
              <OSwitch v-model="varSwitch" isLoading></OSwitch>`,
      setup() {
        const varSwitch = ref<boolean>(false)
        return {
          varSwitch,
        }
      },
    })
    const loadingIcon = wrapper.element.querySelector('#o_switch') as HTMLElement
    expect(loadingIcon).toBeTruthy()
    await wrapper.find('.o-switch').trigger('click')
    expect(!wrapper.vm.varSwitch).toBeTruthy()
  })

  test('props-checkedValue-unCheckedValue', async() => {
    const wrapper = _mount({
      template: `
              <OSwitch
                  :checkedValue="'checkedValue'"
                  :unCheckedValue="'unCheckedValue'"
                  v-model="varSwitch">
              </OSwitch>`,
      setup() {
        const varSwitch = ref<string>('checkedValue')
        return {
          varSwitch,
        }
      },
    })
    await wrapper.find('.o-switch').trigger('click')
    expect(wrapper.vm.varSwitch === 'unCheckedValue').toBeTruthy()
    await wrapper.find('.o-switch').trigger('click')
    expect(wrapper.vm.varSwitch === 'checkedValue').toBeTruthy()
  })
})

describe('test-o-switch-slot', () => {
  test('slot-unCheckedRender', async() => {
    const wrapper = _mount({
      template: `
              <OSwitch v-model="varSwitch">
              <template v-slot:unCheckedRender="slotProps">
                <span id="unChecked-test">unChecked</span>
              </template>
              </OSwitch>`,
      setup() {
        const varSwitch = ref<boolean>(false)
        return {
          varSwitch,
        }
      },
    })
    const slot = await wrapper.find('#unChecked-test')
    expect(slot).toBeTruthy()
  })

  test('slots-checkedRender', async() => {
    const wrapper = _mount({
      template: `
              <OSwitch v-model="varSwitch">
              <template v-slot:checkedRender="slotProps">
                <span id="checked-test">checked</span>
              </template>
              </OSwitch>`,
      setup() {
        const varSwitch = ref<string>('checkedValue')
        return {
          varSwitch,
        }
      },
    })
    const slot = await wrapper.find('#checked-test')
    expect(slot).toBeTruthy()
  })
})

describe('test-o-switch-event', () => {
  const handleChange = vi.fn()
  const handleClick = vi.fn()
  test('event:click', async() => {
    const wrapper = _mount({
      template: `
              <OSwitch @click="testClick" v-model="varSwitch"></OSwitch>`,
      setup() {
        const varSwitch = ref<boolean>(false)
        const testClick = (): void => {
          handleClick()
        }
        return {
          varSwitch,
          testClick,
        }
      },
    })
    await wrapper.find('.o-switch').trigger('click')
    expect(handleClick).toBeCalled()
    expect(wrapper.vm.varSwitch).toBeTruthy()
  })
  test('event:change', async() => {
    const wrapper = _mount({
      template: `
              <OSwitch @change="testChange" v-model="varSwitch"></OSwitch>`,
      setup() {
        const varSwitch = ref<boolean>(false)
        const testChange = (): void => {
          handleChange()
        }
        return {
          varSwitch,
          testChange,
        }
      },
    })
    await wrapper.find('.o-switch').trigger('click')
    expect(handleChange).toBeCalled()
    expect(wrapper.vm.varSwitch).toBeTruthy()
  })
})
