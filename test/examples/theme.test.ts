import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { currentThemeColor, generateTheme, themeIdx } from '../../examples/vite-onu-preset-only/src/composables/theme'

describe('preset example theme picker', () => {
  afterEach(() => {
    generateTheme()
  })

  it('starts with the neutral theme and switches the complete semantic theme', async () => {
    expect(currentThemeColor.value).toBe('默认黑白灰')
    expect(themeIdx.value).toBe(0)

    generateTheme('#919b46')
    await nextTick()

    const style = document.querySelector<HTMLStyleElement>('#onu-example-theme')
    expect(currentThemeColor.value).toBe('#919b46')
    expect(style?.textContent).toContain('--onu-color-primary:var(--onu-color-500)')
    expect(style?.textContent).toContain('.dark{--onu-color-DEFAULT:var(--onu-color-600)')

    generateTheme()
    await nextTick()

    expect(currentThemeColor.value).toBe('默认黑白灰')
    expect(document.querySelector<HTMLStyleElement>('#onu-example-theme')?.textContent).toContain('--onu-color-primary:var(--onu-color-900)')
  })
})
