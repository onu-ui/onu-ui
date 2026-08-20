import { afterEach, describe, expect, it } from 'vitest'
import { createApp } from 'vue'
import { createInstaller } from '../../packages/vue/src/plugin'

describe('onu vue installer', () => {
  afterEach(() => {
    document.querySelector('#onu-ui-theme')?.remove()
  })

  it('keeps the preset neutral theme when color is omitted', () => {
    const app = createApp({})

    app.use(createInstaller())

    expect(document.querySelector('#onu-ui-theme')).toBeNull()
  })

  it('injects a generated theme when color is provided', () => {
    const app = createApp({})

    app.use(createInstaller(), { color: '#9955FF' })

    const style = document.querySelector<HTMLStyleElement>('#onu-ui-theme')
    expect(style?.textContent).toContain('--onu-color-primary:var(--onu-color-500)')
  })
})
