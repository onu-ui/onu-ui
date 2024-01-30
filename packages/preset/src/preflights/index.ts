import type { Preflight } from 'unocss'
import reset from './reset'

const preflights: Preflight[] = [
  {
    getCSS: () => reset,
    layer: '@onu-ui/preset-reset',
  },
]

export default preflights
