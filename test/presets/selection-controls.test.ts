import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetOnu } from '../../packages/preset/src/index'

describe('selection control shortcuts', () => {
  it('keeps checked backgrounds separate from progress pseudo-elements', async () => {
    const uno = await createGenerator({ presets: [presetOnu()] })
    const { css } = await uno.generate('checkbox checkbox-dot switch switch-dot progress', { preflights: false })

    const checkedRules = [...css.matchAll(/([^{}]*input:checked[^{}]*)\{([^{}]*)\}/g)]

    expect(checkedRules.length).toBeGreaterThan(0)
    expect(checkedRules.some(([, selectors]) => selectors.includes('progress'))).toBe(false)
    expect(checkedRules.some(([, , declarations]) => declarations.includes('background-color') && declarations.includes('!important'))).toBe(true)
    expect(css).toContain('.peer:checked~.checkbox-dot')
    expect(css).toContain('.peer:checked~.switch-dot')
  })
})
