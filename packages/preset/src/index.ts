import { definePreset } from 'unocss'
import type { DynamicRule, DynamicShortcut, RuleMeta } from '@unocss/core'
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
      presetIcons(resolvedOptions.icons),
      presetWebFonts({
        fonts: {
          onu: resolvedOptions.fonts,
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
  const defaultOptions: ResolveOnuOptions = {
    prefix: '',
    fonts: ['DM Sans', 'DM Sans:400,700'],
    color: 'auto',
    icons: {
      extraProperties: {
        'display': 'inline-block',
        'height': '1em',
        'width': '1em',
        'vertical-align': 'text-bottom',
      },
      collections: {
        onu: {
          logo: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.0718 24.9996C56.1511 19.6663 63.8489 19.6663 66.9282 24.9996L103.072 87.5999C106.151 92.9333 102.302 99.6 96.1434 99.6H23.8566C17.6982 99.6 13.8492 92.9332 16.9285 87.5999L53.0718 24.9996Z" fill="url(#paint0_linear_806_8)"/><defs><linearGradient id="paint0_linear_806_8" x1="-1.77648" y1="55.7227" x2="109.652" y2="77.6626" gradientUnits="userSpaceOnUse"><stop stop-color="#F87171" stop-opacity="0.73"/><stop offset="0.0001" stop-color="#ACC1EE"/><stop offset="1" stop-color="#C084FC"/></linearGradient></defs></svg>`,
        },
      },
    },
  }

  const resolvedOptions: ResolveOnuOptions = {
    ...defaultOptions,
    ...options,
    color: options.color === 'auto' ? random() : options.color!,
    icons: {
      ...defaultOptions.icons,
      ...options.icons ?? {},
    },
  }

  return resolvedOptions
}

function normalizeMeta(data: DynamicRule<Theme>[] | DynamicShortcut<Theme>, meta: RuleMeta) {
  if (Array.isArray(data)) {
    const originMeta = data[2]

    return data.map(r => [...r, meta])
  }
  return data
}
