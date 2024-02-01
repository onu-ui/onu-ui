import type { Preflight } from 'unocss'
import { theme } from 'magic-color'
import type { ResolveOnuOptions } from '../types'

export function themePreflight(options: ResolveOnuOptions): Preflight {
  const { color } = options

  // TODO: dark theme

  return {
    getCSS: () => {
      const themeObj = theme(color, {
        type: 'rgb',
        render: (meta) => {
          return [
            `--color-primary-${meta[0]}`,
            meta[1].replace(/rgb\((.*)\)/, '$1').replace(/,/g, ''),
          ]
        },
      })

      return `
  :root {
  ${Object.entries(themeObj).map(([key, value]) => `${key}: ${value};`).join('\n  ')}
  --color-primary-DEFAULT: var(--color-primary-500);
  }
      `.trim()
    },
    layer: '@onu-ui/preset-theme',
  }
}
