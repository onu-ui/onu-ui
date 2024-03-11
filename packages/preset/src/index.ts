import { presetUseful } from 'unocss-preset-useful'
import type { PresetFactory } from 'unocss'
import { definePreset } from 'unocss'
import { shortcuts } from './shortcuts'
import { theme } from './theme'
import { rules } from './rules'
import { variants } from './variants'
import type { PrsetOnuOptions, ResolveOnuOptions } from './types'
import { preflights } from './preflights'

export type { PrsetOnuOptions }

export const presetOnu: PresetFactory<object, PrsetOnuOptions> = definePreset((options: PrsetOnuOptions = {}) => {
  const resolvedOptions = resolveOptions(options)

  return {
    name: '@onu-ui/preset',
    theme: theme(resolvedOptions),
    rules,
    variants,
    shortcuts,
    presets: resolvedOptions.presets,
    preflights: preflights(resolvedOptions),
  }
})

function resolveOptions(options: PrsetOnuOptions) {
  const defaultOptions: PrsetOnuOptions = {
    prefix: 'o-',
    color: '#9955FF',
  }
  const optionsWithDefault = Object.assign({}, defaultOptions, options)
  const presets = [presetUseful(optionsWithDefault)]

  return {
    ...optionsWithDefault,
    presets,
  } as ResolveOnuOptions
}
