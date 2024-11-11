import type { Theme } from '@unocss/preset-mini'
import type { ResolveOnuOptions } from '../types'
import { mc } from 'magic-color'

export function theme(options: ResolveOnuOptions): Theme {
  const { color } = options
  const colors = mc.theme(color)
  // Gray basic color
  const grays = mc.theme('#888888')

  return {
    colors: {
      context: 'hsl(var(--onu-color-context) / %alpha)',
      primary: {
        DEFAULT: colors[500],
        ...colors,
      },
      gray: {
        DEFAULT: grays[500],
        ...grays,
      },
    },
    fontSize: {
      '2xs': ['0.625rem', '0.75rem'],
    },
  }
}
