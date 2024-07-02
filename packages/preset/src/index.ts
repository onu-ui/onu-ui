import type { PresetFactory } from 'unocss'
import { definePreset } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { presetUno } from '@unocss/preset-uno'
import { presetAttributify } from '@unocss/preset-attributify'
import { presetIcons } from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import { mc } from 'magic-color'
import { shortcuts } from './shortcuts'
import { theme } from './theme'
import { rules } from './rules'
import { variants } from './variants'
import type { PrsetOnuOptions, ResolveOnuOptions } from './types'
import { preflights } from './preflights'

export type { PrsetOnuOptions }

export const presetOnu = definePreset<Theme>((options: PrsetOnuOptions = {}) => {
  const resolvedOptions = resolveOptions(options)

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
          onu: ['DM Sans', 'DM Sans:400,700'],
        },
        inlineImports: false,
      }),
    ],
  }
})

function resolveOptions(options: PrsetOnuOptions): ResolveOnuOptions {
  const defaultOptions: PrsetOnuOptions = {
    prefix: 'o-',
    color: '#919b46',
    // color: mc.random(),
    font: ['DM Sans', 'DM Sans:400,700'],
  }
  const resolvedOptions = Object.assign({}, defaultOptions, options)

  return resolvedOptions as ResolveOnuOptions
}
