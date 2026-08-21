import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import Accordion from '../../packages/vue/src/components/accordion/index.vue'
import DataTable from '../../packages/vue/src/components/data-table/index.vue'
import { AlertDialog } from '../../packages/vue/src/components/dialog'
import Dialog from '../../packages/vue/src/components/dialog/index.vue'
import { Sheet } from '../../packages/vue/src/components/drawer'
import { ContextMenu } from '../../packages/vue/src/components/dropdown-menu'
import { HoverCard } from '../../packages/vue/src/components/popover'
import Tabs from '../../packages/vue/src/components/tabs/index.vue'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('interactive Vue components', () => {
  it('exposes related components as named exports', () => {
    expect(AlertDialog.name).toBe('AlertDialog')
    expect(Sheet.name).toBe('Sheet')
    expect(HoverCard.name).toBe('HoverCard')
    expect(ContextMenu.name).toBe('ContextMenu')
  })

  it('updates the accordion model from a user click', async () => {
    const wrapper = mount(Accordion, {
      props: {
        items: [
          { value: 'first', label: 'First', content: 'First panel' },
          { value: 'second', label: 'Second', content: 'Second panel' },
        ],
      },
    })

    await wrapper.get('button[aria-controls="second-panel"]').trigger('click')

    expect(wrapper.emitted('update:modelValue')).toEqual([['second']])
  })

  it('supports arrow-key tab selection', async () => {
    const wrapper = mount(Tabs, {
      props: {
        modelValue: 'preview',
        items: [
          { value: 'preview', label: 'Preview' },
          { value: 'code', label: 'Code' },
        ],
      },
    })

    await wrapper.get('[role="tab"]').trigger('keydown', { key: 'ArrowRight' })

    expect(wrapper.emitted('update:modelValue')).toEqual([['code']])
  })

  it('requests dialog dismissal when Escape is pressed', async () => {
    const wrapper = mount(Dialog, {
      attachTo: document.body,
      props: {
        modelValue: true,
        title: 'Confirm publish',
      },
    })

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
    wrapper.unmount()
  })

  it('sorts data-table rows through the public header control', async () => {
    const wrapper = mount(DataTable, {
      props: {
        columns: [{ key: 'name', label: 'Project', sortable: true }],
        rows: [
          { id: 1, name: 'Zulu' },
          { id: 2, name: 'Alpha' },
        ],
      },
    })

    await wrapper.get('thead button').trigger('click')
    const cells = wrapper.findAll('tbody td').map(cell => cell.text())

    expect(cells).toEqual(['Alpha', 'Zulu'])
  })
})
