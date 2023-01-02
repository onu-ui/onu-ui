import { describe, expect, test, vi } from 'vitest'
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { ORate } from '@onu-ui/components'

describe('Rate Component', () => {
  test('basic', async () => {
    const val = ref(2)
    const wrapper = mount(ORate, {
      props: {
        'modelValue': val.value,
        'max': 8,
        'onUpdate:modelValue': (data) => { val.value = data },
      },
    })
    await nextTick()
    expect(wrapper.findAll('.o-rate-star').length).toBe(8)
    expect(wrapper.findAll('.o-rate-select').length).toBe(2)

    // select
    wrapper.findAll('.o-rate-star')[2].trigger('mousemove')
    await nextTick()
    wrapper.findAll('.o-rate-star')[2].trigger('click')
    expect(wrapper.findAll('.o-rate-select').length).toBe(3)
    await nextTick()
    expect(val.value).toBe(3)
  })

  test('readonly', async () => {
    const val = ref(2)
    const wrapper = mount(ORate, {
      props: {
        'readonly': true,
        'modelValue': val.value,
        'max': 8,
        'onUpdate:modelValue': (data) => { val.value = data },
      },
    })
    await nextTick()
    expect(wrapper.findAll('.o-rate-star').length).toBe(8)
    expect(wrapper.findAll('.o-rate-select').length).toBe(2)

    // select
    wrapper.findAll('.o-rate-star')[2].trigger('mousemove')
    await nextTick()
    wrapper.findAll('.o-rate-star')[2].trigger('click')
    expect(wrapper.findAll('.o-rate-select').length).toBe(2)
    await nextTick()
    expect(val.value).toBe(2)
  })

  test('half-star', async () => {
    const val = ref(2.5)
    const wrapper = mount(ORate, {
      props: {
        'modelValue': val.value,
        'max': 8,
        'onUpdate:modelValue': (data) => { val.value = data },
      },
    })
    await nextTick()
    expect(wrapper.findAll('.o-rate-star').length).toBe(8)
    expect(wrapper.findAll('.o-rate-select').length).toBe(3)
    expect(wrapper.findAll('.o-rate-half').length).toBe(1)
    const halfStar = wrapper.find('.o-rate-half')
    const event = {
      target: halfStar.element,
      offsetX: 0,
    }
    wrapper.vm.setCurValue(3, event as any)
    halfStar.trigger('click')
    await nextTick()
    expect(wrapper.findAll('.o-rate-select').length).toBe(3)
    expect(wrapper.findAll('.o-rate-half').length).toBe(0)
    expect(val.value).toBe(3)
  })

  test('color', async () => {
    const val = ref(2)
    const wrapper = mount(ORate, {
      props: {
        'modelValue': val.value,
        'onUpdate:modelValue': (data) => { val.value = data },
        'color': 'secondary',
        'voidColor': 'primary',
      },
    })

    await nextTick()
    expect(wrapper.find('.o-rate-select').element.getAttribute('o')).toBe('secondary')
    expect(wrapper.find('.o-rate-unselect').element.getAttribute('o')).toBe('primary')
  })

  test('show-text', async () => {
    const val = ref(2)
    const wrapper = mount(ORate, {
      props: {
        'modelValue': val.value,
        'onUpdate:modelValue': (data) => { val.value = data },
        'text': 'showText test',
      },
    })
    await nextTick()
    expect(wrapper.find('.o-rate-text').element.textContent).toBe('showText test')
  })

  test('event:change', async () => {
    const val = ref(2)
    const fn = vi.fn()
    const wrapper = mount(ORate, {
      props: {
        'onChange': fn,
        'modelValue': val.value,
        'max': 8,
        'onUpdate:modelValue': (data) => { val.value = data },
      },
    })
    // select
    wrapper.findAll('.o-rate-star')[2].trigger('mousemove')
    await nextTick()
    wrapper.findAll('.o-rate-star')[2].trigger('click')
    expect(wrapper.findAll('.o-rate-select').length).toBe(3)
    await nextTick()
    expect(fn).toHaveBeenCalled()
  })
})
