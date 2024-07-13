import { describe, expect, it } from 'vitest'
import { createGenerator } from 'unocss'
import { presetOnu } from '../../packages/preset/src/index'
import { contextTargets, unContextTargets } from '../features/assets/context-targets'

describe('onu context', () => {
  const testColor = '#9955FF'

  const uno = createGenerator({
    presets: [presetOnu({ color: testColor })],
  })

  it('matched tokens', async () => {
    const { css, matched } = await uno.generate(contextTargets, { preflights: false })
    expect(css).toMatchSnapshot()
    expect(matched.size).toBe(contextTargets.length)
  })

  it('unmatched tokens', async () => {
    const { matched } = await uno.generate(unContextTargets, { preflights: false })
    expect(matched.size).toBe(0)
  })
})
