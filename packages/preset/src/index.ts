import { definePreset } from '@unocss/core'
import type { Preset } from '@unocss/core'
import shortcuts from './shortcuts/index'
import theme from './theme'
import rules from './rules'
import variants from './variants'

export function presetOnu(): Preset {
  return definePreset({
    name: '@onu-ui/preset',
    theme,
    rules,
    variants,
    shortcuts,
  })
}

export * from './colors'
