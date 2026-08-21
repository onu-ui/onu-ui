import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetOnu } from '../../packages/preset/src/index'

describe('shadcn-compatible component sizes', () => {
  async function generate(token: string) {
    const uno = await createGenerator({ presets: [presetOnu()] })
    return (await uno.generate(token, { preflights: false })).css
  }

  it.each(['btn', 'input', 'select-native', 'toggle'])(
    'uses the shared control height scale for %s',
    async (component) => {
      const sizes = {
        xs: '6',
        sm: '8',
        md: '9',
        lg: '10',
      }

      for (const [size, height] of Object.entries(sizes))
        expect(await generate(`${component}-${size}`)).toContain(`height:calc(var(--spacing) * ${height})`)
    },
  )

  it('keeps default primitive sizes aligned with shadcn/ui', async () => {
    const expectations = {
      'pagination-item-md': ['height:calc(var(--spacing) * 9)', 'width:calc(var(--spacing) * 9)'],
      'textarea-md': ['min-height:calc(var(--spacing) * 16)'],
      'avatar-md': ['width:calc(var(--spacing) * 8)'],
      'badge-md': ['height:calc(var(--spacing) * 5)'],
      'checkbox-md': ['height:calc(var(--spacing) * 4)', 'width:calc(var(--spacing) * 4)'],
      'radio-md': ['height:calc(var(--spacing) * 4)', 'width:calc(var(--spacing) * 4)'],
      'switch-md': ['height:calc(var(--spacing) * 4.5)', 'width:calc(var(--spacing) * 8)', '--dot-size:1rem'],
      'kbd-md': ['height:calc(var(--spacing) * 5)', 'min-width:calc(var(--spacing) * 5)'],
      'spinner-md': ['height:calc(var(--spacing) * 4)', 'width:calc(var(--spacing) * 4)'],
    }

    for (const [token, declarations] of Object.entries(expectations)) {
      const css = await generate(token)
      for (const declaration of declarations)
        expect(css).toContain(declaration)
    }
  })
})
