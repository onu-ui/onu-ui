import type { Theme } from '@unocss/preset-mini'
import type { ResolveOnuOptions } from '../types'
import { createOklchTheme } from '../utils'

export function theme(options: ResolveOnuOptions): Theme {
  const { color } = options
  const colors = createOklchTheme(color)
  // Gray basic color
  const grays = createOklchTheme('#888888')

  return {
    colors: {
      context: 'oklch(var(--onu-color-context))',
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
