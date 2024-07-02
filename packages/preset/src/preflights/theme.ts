import type { Preflight } from 'unocss'
import { mc } from 'magic-color'
import type { ResolveOnuOptions } from '../types'

export function themePreflight(options: ResolveOnuOptions): Preflight {
  const { color } = options

  return {
    getCSS: () => {
      const themeObj = mc.theme(color, {
        type: 'hsl',
        render: meta => [`--onu-color-${meta[0]}`, meta[1].replace(/hsl\((.*)\)/, '$1')],
      })

      return `
:root {
  color-scheme: light dark;
  ${Object.entries(themeObj).map(([key, value]) => `${key}: ${value};`).join('\n  ')}
  --onu-color-DEFAULT: var(--onu-color-500);
  --onu-color-text: var(--onu-color-100);
}

.dark {
  --onu-color-DEFAULT: var(--onu-color-600);
  --onu-color-text: var(--onu-color-950);
}

      `.trim()
    },
    layer: '@onu-ui/preset-theme',
  }
}
