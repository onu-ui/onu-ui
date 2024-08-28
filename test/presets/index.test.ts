import { describe, expect, it } from 'vitest'
import { createGenerator } from 'unocss'
import type { PrsetOnuOptions } from '../../packages/preset/src/index'
import { presetOnu } from '../../packages/preset/src/index'
import { formatCSSCode } from '../utils'

describe('onu preset', () => {
  const color = '#9955FF'

  function createOnu(options: PrsetOnuOptions = {}) {
    return createGenerator({
      presets: [
        presetOnu(options),
      ],
    })
  }

  it('preflights', async () => {
    const uno = createOnu({ color })
    const { css } = await uno.generate('')
    expect(await formatCSSCode(css)).toMatchSnapshot()
  })

  it('with prefix', async () => {
    const uno = createOnu({ prefix: 'u-' })

    const { css } = await uno.generate(`
      <div class="u-btn u-btn-red">Hello</div>
    `, { preflights: false })

    expect(await formatCSSCode(css)).toMatchInlineSnapshot(`
      "/* layer: default */
      .u-btn {
        --onu-color-context: var(--onu-color-500);
        --onu-color-context: var(--onu-color-text);
        border-width: 0px;
        --un-border-opacity: 1;
        border-color: hsl(var(--onu-color-context) / var(--un-border-opacity));
        --un-bg-opacity: 1;
        background-color: hsl(var(--onu-color-context) / var(--un-bg-opacity));
      }
      .u-btn:disabled {
        opacity: 0.64;
      }
      .u-btn-red {
        --onu-color-context: 0 91 71;
      }
      "
    `)

    const { css: noncss } = await uno.generate(`
      <div class="btn btn-red rounded">Hello</div>
    `, { preflights: false })

    expect(await formatCSSCode(noncss)).toMatchInlineSnapshot(`
      "/* layer: default */
      .rounded {
        border-radius: 0.25rem;
      }
      "
    `)
  })
})
