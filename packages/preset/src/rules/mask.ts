import type { CustomRule } from '../types'

export const masks: CustomRule[] = [
  ['mask', {
    '-webkit-mask-size': 'contain',
    'mask-size': 'contain',
    '-webkit-mask-repeat': 'no-repeat',
    'mask-repeat': 'no-repeat',
    '-webkit-mask-position': 'center',
    'mask-position': 'center',
  }],
]
