import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp } from 'vue'
import OAccordion from '../../packages/vue/src/components/accordion/index.vue'
import ODataTable from '../../packages/vue/src/components/data-table/index.vue'
import { ODialog as DialogPlugin } from '../../packages/vue/src/components/dialog'
import ODialog from '../../packages/vue/src/components/dialog/index.vue'
import { ODrawer } from '../../packages/vue/src/components/drawer'
import { ODropdownMenu } from '../../packages/vue/src/components/dropdown-menu'
import { OPopover } from '../../packages/vue/src/components/popover'
import OTabs from '../../packages/vue/src/components/tabs/index.vue'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('interactive Vue components', () => {
  it('registers related component aliases through the plugin', () => {
    const app = createApp({})
    app.use(DialogPlugin)
    app.use(ODrawer)
    app.use(OPopover)
    app.use(ODropdownMenu)

    expect(app.component('OAlertDialog')).toBeDefined()
    expect(app.component('OSheet')).toBeDefined()
    expect(app.component('OHoverCard')).toBeDefined()
    expect(app.component('OContextMenu')).toBeDefined()
  })

  it('updates the accordion model from a user click', async () => {
    const wrapper = mount(OAccordion, {
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
    const wrapper = mount(OTabs, {
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
    const wrapper = mount(ODialog, {
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
    const wrapper = mount(ODataTable, {
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
