import { type Preset, definePreset } from 'unocss'
import { type UsefulOptions, presetUseful } from 'unocss-preset-useful'
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
  /**
   * PresetUseful Options. See https://github.com/zyyv/unocss-preset-useful.
   */
  useful?: UsefulOptions
}

export function presetOnu({ useful }: Options): Preset {
  return definePreset({
    name: '@onu-ui/preset',
    theme,
    rules,
    variants,
    shortcuts,
    presets: [presetUseful(useful || {})],
  })
}
