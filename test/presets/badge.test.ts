import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetOnu } from '../../packages/preset/src/index'

describe('badge shortcuts', () => {
  it('generates every shadcn-compatible variant', async () => {
    const tokens = [
      'badge',
      'badge-secondary',
      'badge-destructive',
      'badge-outline',
      'badge-ghost',
      'badge-link',
      'badge-dot',
    ]
    const uno = await createGenerator({ presets: [presetOnu()] })
    const { css, matched } = await uno.generate(tokens.join(' '), { preflights: false })

    expect([...matched].sort()).toEqual([...tokens].sort())
    expect(css).toContain('--onu-color-secondary')
    expect(css).toContain('--onu-color-destructive')
    expect(css).toContain('--onu-color-accent')
    expect(css).toContain(':focus-visible')
    expect(css).toContain('aria-invalid')
  })

  it('renders custom colors as soft badges', async () => {
    const tokens = ['badge', 'badge-red', 'badge-[#886886]']
    const uno = await createGenerator({ presets: [presetOnu()] })
    const { css, matched } = await uno.generate(tokens.join(' '), { preflights: false })

    expect([...matched].sort()).toEqual([...tokens].sort())
    expect(css).toContain('.badge-red')
    expect(css).toContain('--onu-color-context')
    expect(css).toContain('oklch(var(--onu-color-context)) 10%')
    expect(css).toContain('oklch(var(--onu-color-context)) 25%')
    expect(css).toContain('oklch(var(--onu-color-context)) var(--un-text-opacity)')
  })
})
