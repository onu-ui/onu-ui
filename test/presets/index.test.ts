import { describe, expect, it } from 'vitest'
import { createGenerator } from 'unocss'
import { presetOnu } from '../../packages/preset/src/index'
import { formatCSSCode } from '../utils'

describe('onu preset', () => {
  const testColor = '#9955FF'

  const uno = createGenerator({
    presets: [presetOnu({ color: testColor })],
  })

  it('preflights', async () => {
    const { css } = await uno.generate('')
    expect(await formatCSSCode(css)).toMatchSnapshot()
  })
})
