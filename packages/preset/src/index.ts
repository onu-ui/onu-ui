import { definePreset } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { presetUno } from '@unocss/preset-uno'
import { presetAttributify } from '@unocss/preset-attributify'
import { presetIcons } from '@unocss/preset-icons'
import { shortcuts } from './shortcuts'
import theme from './theme'
import rules from './rules'
import variants from './variants'
import type { PrsetOnuOptions, ResolveOnuOptions } from './types'

export function presetOnu(options: PrsetOnuOptions = {}) {
  const { presets } = resolveOptions(options)
  return definePreset({
    name: '@onu-ui/preset',
    theme,
    rules,
    variants,
    shortcuts,
    presets,
  })
}

function resolveOptions(options: PrsetOnuOptions) {
  const defaultOptions: PrsetOnuOptions = {
    prefix: 'o-',
    uno: true,
    attributify: true,
    icons: true,
    useful: true,
  }
  const optionsWithDefault = Object.assign({}, defaultOptions, options)

  const presets: any = []
  const presetMap = {
    uno: presetUno,
    attributify: presetAttributify,
    icons: presetIcons,
    useful: presetUseful,
  }
  for (const [key, preset] of Object.entries(presetMap)) {
    const option = optionsWithDefault[key as keyof typeof presetMap]
    if (option)
      presets.push(preset(typeof option === 'boolean' ? {} as any : option))
  }

  return {
    ...optionsWithDefault,
    presets,
  } as ResolveOnuOptions
}
