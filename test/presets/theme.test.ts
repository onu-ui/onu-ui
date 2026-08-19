import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { resolveTheme } from '../../packages/preset/src/helper'
import { presetOnu } from '../../packages/preset/src/index'

describe('onu semantic theme', () => {
  const color = '#9955FF'

  it('generates light and dark semantic variables', () => {
    const { css } = resolveTheme(color)

    expect(css).toContain('--onu-color-background: 100% 0 0;')
    expect(css).toContain('--onu-color-foreground: 14.5% 0 0;')
    expect(css).toContain('--onu-color-primary: var(--onu-color-500);')
    expect(css).toContain('--onu-color-primary-foreground-light:')
    expect(css).toContain('--onu-color-primary-foreground-dark:')
    expect(css).toContain('--onu-color-primary-foreground: var(--onu-color-primary-foreground-light);')
    expect(css).toContain('--onu-color-muted: var(--onu-color-muted-light);')
    expect(css).toContain('--onu-color-muted-foreground: 55.6% 0 0;')
    expect(css).toContain('--onu-color-border-default: var(--onu-color-border-light);')
    expect(css).toContain('--onu-color-ring: var(--onu-color-500);')
    expect(css).toContain('--onu-color-background: 14.5% 0 0;')
    expect(css).toContain('--onu-color-primary: var(--onu-color-600);')
    expect(css).toContain('--onu-color-primary-foreground: var(--onu-color-primary-foreground-dark);')
  })

  it('chooses a readable primary foreground when the brand color changes', () => {
    const purple = resolveTheme('#9955FF')
    const olive = resolveTheme('#919b46')

    expect(purple.meta['--onu-color-primary-foreground-light']).toBe('var(--onu-color-50)')
    expect(olive.meta['--onu-color-primary-foreground-light']).toBe('var(--onu-color-950)')
    expect(purple.meta['--onu-color-muted-light']).toBe('var(--onu-color-50)')
    expect(purple.meta['--onu-color-accent-dark']).toBe('var(--onu-color-950)')
  })

  it('provides utilities for every semantic color role', async () => {
    const tokens = [
      'bg-background',
      'text-foreground',
      'bg-card',
      'text-card-foreground',
      'bg-popover',
      'text-popover-foreground',
      'bg-primary',
      'text-primary-foreground',
      'bg-secondary',
      'text-secondary-foreground',
      'bg-muted',
      'text-muted-foreground',
      'bg-accent',
      'text-accent-foreground',
      'bg-destructive',
      'text-destructive-foreground',
      'border-border',
      'border-input',
      'ring-ring',
    ]
    const uno = await createGenerator({
      presets: [presetOnu({ color })],
    })
    const { css, matched } = await uno.generate(tokens.join(' '), { preflights: false })

    expect(matched.size).toBe(tokens.length)
    expect(css).toContain('--onu-color-background')
    expect(css).toContain('--onu-color-primary-foreground')
    expect(css).toContain('--onu-color-muted-foreground')
    expect(css).toContain('--onu-color-border-default')
    expect(css).toContain('--onu-color-ring')
  })

  it('applies semantic colors and focus rings to component shortcuts', async () => {
    const uno = await createGenerator({
      presets: [presetOnu({ color })],
    })
    const { css } = await uno.generate([
      'avatar-group',
      'badge',
      'btn',
      'btn-ghost',
      'card',
      'checkbox',
      'input',
      'radio',
      'switch',
      'switch-dot',
    ].join(' '), { preflights: false })

    expect(css).toContain('--onu-color-card')
    expect(css).toContain('--onu-color-muted')
    expect(css).toContain('--onu-color-input')
    expect(css).toContain('--onu-color-accent')
    expect(css).toContain('--onu-color-ring')
    expect(css).toContain(':focus-visible')
    expect(css).toContain('--un-translate-y:1px')
    expect(css).toContain('pointer-events:none')
  })
})
