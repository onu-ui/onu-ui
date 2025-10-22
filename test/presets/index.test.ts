import type { PrsetOnuOptions } from '../../packages/preset/src/index'
import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetOnu } from '../../packages/preset/src/index'
import { formatCSSCode } from '../utils'

describe('onu preset', () => {
  const color = '#9955FF'

  async function createOnu(options: PrsetOnuOptions = {}) {
    return await createGenerator({
      presets: [
        presetOnu(options),
      ],
    })
  }

  it('preflights', async () => {
    const uno = await createOnu({ color })
    const { css } = await uno.generate('')
    expect(await formatCSSCode(css)).toMatchSnapshot()
  })
})
