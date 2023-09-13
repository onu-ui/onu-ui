import { presetUseful } from 'unocss-preset-useful'
import type { Theme } from '@unocss/preset-uno'
import type { Preset } from '@unocss/core'
import { shortcuts } from './shortcuts'
import theme from './theme'
import rules from './rules'
import variants from './variants'
import type { PrsetOnuOptions, ResolveOnuOptions } from './types'

export type { PrsetOnuOptions }

export function presetOnu(options: PrsetOnuOptions = {}): Preset<Theme> {
  const { presets } = resolveOptions(options)
  return {
    name: '@onu-ui/preset',
    theme,
    rules,
    variants,
    shortcuts,
    presets,
  }
}

function resolveOptions(options: PrsetOnuOptions) {
  const defaultOptions: PrsetOnuOptions = {
    prefix: 'o-',
  }
  const optionsWithDefault = Object.assign({}, defaultOptions, options)
  const presets = [presetUseful(optionsWithDefault)]

  return {
    ...optionsWithDefault,
    presets,
  } as ResolveOnuOptions
}
