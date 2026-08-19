import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetOnu } from '../../packages/preset/src/index'

describe('onu css foundation shortcuts', () => {
  it('generates every foundation component without runtime code', async () => {
    const tokens = [
      'alert',
      'alert-title',
      'alert-desc',
      'alert-soft',
      'alert-destructive',
      'alert-blue',
      'emptybox',
      'emptybox-header',
      'emptybox-media',
      'emptybox-media-icon',
      'emptybox-title',
      'emptybox-desc',
      'emptybox-content',
      'kbd',
      'kbd-lg',
      'kbd-outline',
      'kbd-group',
      'separator',
      'separator-v',
      'separator-strong',
      'skeleton',
      'skeleton-text',
      'skeleton-avatar',
      'spinner',
      'spinner-lg',
      'spinner-primary',
      'spinner-muted',
    ]
    const uno = await createGenerator({
      presets: [presetOnu({ color: '#608e57' })],
    })
    const { css, matched } = await uno.generate(tokens.join(' '), { preflights: false })

    expect([...matched].sort()).toEqual([...tokens].sort())
    expect(css).toContain('--onu-color-card')
    expect(css).toContain('--onu-color-muted')
    expect(css).toContain('--onu-color-destructive')
    expect(css).toContain('--onu-color-context')
    expect(css).toContain('@media (prefers-reduced-motion: reduce)')
  })
})
