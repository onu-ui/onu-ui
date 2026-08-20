import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetOnu } from '../../packages/preset/src/index'

describe('onu css-only component shortcuts', () => {
  it('generates every public shortcut from the css-only TODO', async () => {
    const tokens = [
      'label',
      'label-required',
      'textarea',
      'textarea-sm',
      'select-native',
      'select-native-lg',
      'field',
      'field-group',
      'field-description',
      'field-error',
      'input-group',
      'input-group-addon',
      'item',
      'item-interactive',
      'breadcrumb',
      'breadcrumb-link',
      'pagination',
      'pagination-item',
      'pagination-active',
      'progress',
      'progress-lg',
      'table-wrap',
      'table',
      'table-row',
      'typo-h1',
      'typo-p',
      'aspect-frame-video',
      'aspect-frame-4x3',
      'toggle',
      'toggle-outline',
    ]
    const uno = await createGenerator({ presets: [presetOnu()] })
    const { css, matched } = await uno.generate(tokens.join(' '), { preflights: false })

    expect([...matched].sort()).toEqual([...tokens].sort())
    expect(css).toContain('--onu-color-context')
    expect(css).toContain('--onu-color-muted')
    expect(css).toContain('--onu-color-border')
  })
})
