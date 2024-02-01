import type { Preflight } from 'unocss'
import { theme } from 'magic-color'
import type { ResolveOnuOptions } from '../types'
import reset from './reset'

export function preflights(options: ResolveOnuOptions): Preflight[] {
  const { color } = options

  const resetPreflight: Preflight = {
    getCSS: () => reset,
    layer: '@onu-ui/preset-reset',
  }

  const themePreflight: Preflight = {
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

  return [
    resetPreflight,
    themePreflight,
  ]
}
