import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Badge from '../../packages/vue/src/components/badge/index.vue'

describe('badge component', () => {
  it.each([
    ['default', ''],
    ['secondary', 'badge-secondary'],
    ['destructive', 'badge-destructive'],
    ['outline', 'badge-outline'],
    ['ghost', 'badge-ghost'],
    ['link', 'badge-link'],
  ] as const)('renders the %s variant', (variant, variantClass) => {
    const wrapper = mount(Badge, {
      props: { variant },
      slots: { default: 'Status' },
    })

    expect(wrapper.classes()).toContain('badge')
    expect(wrapper.classes()).toContain('badge-md')
    if (variantClass)
      expect(wrapper.classes()).toContain(variantClass)
    expect(wrapper.attributes('data-slot')).toBe('badge')
    expect(wrapper.attributes('data-variant')).toBe(variant)
    expect(wrapper.attributes('data-size')).toBe('md')
  })

  it('renders a semantic link and forwards attributes', () => {
    const wrapper = mount(Badge, {
      props: {
        tag: 'a',
        variant: 'link',
      },
      attrs: {
        'href': '/releases',
        'aria-label': 'Open releases',
      },
      slots: { default: 'Release notes' },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('/releases')
    expect(wrapper.attributes('aria-label')).toBe('Open releases')
  })

  it('keeps dot and position support', () => {
    const wrapper = mount(Badge, {
      props: {
        dot: true,
        position: 'tr',
        size: 'xs',
      },
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      'badge',
      'badge-xs',
      'badge-dot',
      'badge-pos-tr',
    ]))
  })
})
