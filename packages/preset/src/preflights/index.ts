import type { Preflight } from 'unocss'

const injectPreflights = '__Prefilghts_Placeholder__'

const preflights: Preflight[] = [
  {
    getCSS: () => injectPreflights,
    layer: '@onu-ui/preset',
  },
]

export default preflights
