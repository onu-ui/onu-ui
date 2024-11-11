import type { Theme } from '@unocss/preset-mini'
import type { PrsetOnuOptions, ResolveOnuOptions } from './types'
import { mc } from 'magic-color'
import { definePreset, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { LAYER_ONU_PRESET, LAYER_ONU_UI } from './layers'
import { preflights } from './preflights'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { theme } from './theme'
import { variants } from './variants'

export type { PrsetOnuOptions }

export const presetOnu = definePreset<PrsetOnuOptions, Theme>((options) => {
  const resolvedOptions = resolveOptions(options)

  return {
    name: '@onu-ui/preset',
    layer: LAYER_ONU_PRESET,
    layers: LAYER_ONU_UI,
    rules,
    shortcuts,
    variants,
    preflights: preflights(resolvedOptions),
    presets: [
      presetUno({ preflight: resolvedOptions.preflights }),
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
      const { colors, fontSize } = theme(resolvedOptions)

      return {
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          ...colors,
        },
        fontSize: {
          ...defaultTheme.fontSize,
          ...fontSize,
        },
      }
    },
    options: resolvedOptions,
  }
})

export default presetOnu

function resolveOptions(options: PrsetOnuOptions = {}): ResolveOnuOptions {
  const defaultOptions: ResolveOnuOptions = {
    fonts: ['DM Sans', 'DM Sans:400,700'],
    color: 'auto',
    preflights: true,
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
    color: options.color === 'auto' ? mc.random() : options.color!,
    icons: {
      ...defaultOptions.icons,
      ...options.icons ?? {},
    },
  }

  return resolvedOptions
}

// function normalizeMeta<T = CustomRule | CustomShortcut>(dynamicRuleOrShourtcut: T, patchMeta: RuleMeta): T {
//   if (Array.isArray(dynamicRuleOrShourtcut)) {
//     const meta = dynamicRuleOrShourtcut[2]
//       ? Object.assign({}, dynamicRuleOrShourtcut[2], patchMeta)
//       : patchMeta

//     return [dynamicRuleOrShourtcut[0], dynamicRuleOrShourtcut[1], meta] as T
//   }
//   return dynamicRuleOrShourtcut
// }
