import { definePreset } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { presetUno } from '@unocss/preset-uno'
import { presetAttributify } from '@unocss/preset-attributify'
import { presetIcons } from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import { shortcuts } from './shortcuts'
import { theme } from './theme'
import { rules } from './rules'
import { variants } from './variants'
import type { PrsetOnuOptions, ResolveOnuOptions } from './types'
import { preflights } from './preflights'

export { resolveTheme } from './utils'

export type { PrsetOnuOptions }

export const presetOnu = definePreset<PrsetOnuOptions, Theme>((options) => {
  const resolvedOptions = resolveOptions(options!)

  return {
    name: '@onu-ui/preset',
    theme: theme(resolvedOptions),
    rules,
    variants,
    shortcuts,
    preflights: preflights(resolvedOptions),
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetWebFonts({
        fonts: {
          onu: resolvedOptions.font,
        },
        inlineImports: false,
      }),
    ],
  }
})

function resolveOptions(options: PrsetOnuOptions): ResolveOnuOptions {
  const defaultOptions: Omit<PrsetOnuOptions, 'color'> = {
    prefix: 'o-',
    font: ['DM Sans', 'DM Sans:400,700'],
  }
  const resolvedOptions = Object.assign({}, defaultOptions, options)

  return resolvedOptions as ResolveOnuOptions
}
