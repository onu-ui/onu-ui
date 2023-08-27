import { type Preset, definePreset } from 'unocss'
import shortcuts from './shortcuts/index'
import theme from './theme'
import rules from './rules'
import variants from './variants'

interface Options {
  /**
   * Prefix of all of Onu's utility.
   *
   * @default 'o-'
   */
  prefix?: string
}

export function presetOnu(): Preset {
  return definePreset({
    name: '@onu-ui/preset',
    theme,
    rules,
    variants,
    shortcuts,
  })
}
