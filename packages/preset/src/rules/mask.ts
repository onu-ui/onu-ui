import type { Rule } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

export const masks = [
  ['mask', {
    '-webkit-mask-size': 'contain',
    'mask-size': 'contain',
    '-webkit-mask-repeat': 'no-repeat',
    'mask-repeat': 'no-repeat',
    '-webkit-mask-position': 'center',
    'mask-position': 'center',
  }],
] as Rule<Theme>[]
