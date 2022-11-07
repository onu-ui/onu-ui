import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { OCard } from '@onu-ui/components'

const CARD_TEXT_CONTENT = 'Test Content'
describe('o-card', () => {
  test('card render test', () => {
    const wrapper = mount(OCard, {
      props: {
        content: CARD_TEXT_CONTENT,
      },
    })

    expect(wrapper.text()).toEqual(CARD_TEXT_CONTENT)
  })

  test('card title description extra test', () => {
    const wrapper = mount(OCard, {
      props: {
        title: 'Test title',
        extra: 'More',
        description: 'Test description',
      },
    })
    const slotWrapper = mount(OCard, {
      slots: {
        extra: '<a class="primary">test-link</a>',
      },
    })

    expect(wrapper.find('.o-card-header-wrapper').exists()).toBeTruthy()
    expect(wrapper.find('.o-card-header-title').text()).toBe('Test title')
    expect(wrapper.find('.o-card-header-description').text()).toBe(
      'Test description',
    )
    expect(wrapper.find('.o-card-header-extra').exists()).toBeTruthy()
    expect(wrapper.find('.o-button-base').text()).toBe('More')

    expect(slotWrapper.find('.o-card-header-extra').exists()).toBeTruthy()
    expect(slotWrapper.find('.primary').text()).toBe('test-link')
  })

  test('card size test', () => {
    const wrapper = mount(OCard, {
      props: {
        title: 'Test title',
        size: 'sm',
      },
    })

    expect(wrapper.find('.o-card-sm').exists()).toBeTruthy()
  })

  test('card cover test', () => {
    const wrapper = mount(OCard, {
      props: {
        cover:
          'https://images.unsplash.com/photo-1660554042520-db71c7fea8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      },
    })

    expect(wrapper.find('.o-card-cover').exists()).toBeTruthy()
    expect(wrapper.find('.o-card-cover img').exists()).toBeTruthy()
  })

  test('card hoverable test', () => {
    const wrapper = mount(OCard, {
      props: {
        title: 'Test title',
        shadow: 'hover',
      },
    })

    expect(wrapper.find('.o-card-hoverable').exists()).toBeTruthy()
  })

  test('should work with `slots`', () => {
    const wrapper = mount(OCard, {
      slots: {
        header: () => 'header',
        default: () => 'content',
        actions: () => 'actions',
      },
    })

    expect(wrapper.find('.o-card-header').exists()).toBeTruthy()
    expect(wrapper.find('.o-card-header').text()).toBe('header')

    expect(wrapper.find('.o-card-body').exists()).toBeTruthy()
    expect(wrapper.find('.o-card-body').text()).toBe('content')

    expect(wrapper.find('.o-card-actions').exists()).toBeTruthy()
    expect(wrapper.find('.o-card-actions').text()).toBe('actions')
  })
})
