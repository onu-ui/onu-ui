import { definePreset } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { presetUno } from '@unocss/preset-uno'
import { presetAttributify } from '@unocss/preset-attributify'
import { presetIcons } from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import { random } from 'magic-color'
import { shortcuts } from './shortcuts'
import { theme } from './theme'
import { rules } from './rules'
import { variants } from './variants'
import type { PrsetOnuOptions, ResolveOnuOptions } from './types'
import { preflights } from './preflights'

export type { PrsetOnuOptions }

export const presetOnu = definePreset<PrsetOnuOptions, Theme>((options) => {
  const resolvedOptions = resolveOptions(options)

  return {
    name: '@onu-ui/preset',
    rules,
    variants,
    shortcuts,
    preflights: preflights(resolvedOptions),
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'height': '1em',
          'width': '1em',
          'vertical-align': 'text-bottom',
        },
      }),
      presetWebFonts({
        fonts: {
          onu: resolvedOptions.font,
        },
        inlineImports: false,
      }),
    ],
    extendTheme(defaultTheme) {
      const { colors } = theme(resolvedOptions)

      return {
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          ...colors,
        },
      }
    },
  }
})

function resolveOptions(options: PrsetOnuOptions = {}): ResolveOnuOptions {
  const defaultOptions: PrsetOnuOptions = {
    prefix: 'o-',
    font: ['DM Sans', 'DM Sans:400,700'],
    color: 'auto',
  }
  const resolvedOptions = {
    ...defaultOptions,
    ...options,
    color: options.color === 'auto' ? random() : options.color,
  }

  return resolvedOptions as ResolveOnuOptions
}
