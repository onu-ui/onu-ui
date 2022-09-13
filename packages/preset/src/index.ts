import shortcuts from './shortcuts/index'
import theme from './theme'
import rules from './rules'
import variants from './variants'
import type { Preset } from 'unocss'

export function presetOnu(): Preset {
  return {
    name: '@onu-ui/preset',
    theme,
    rules,
    variants,
    shortcuts,
  }
}
