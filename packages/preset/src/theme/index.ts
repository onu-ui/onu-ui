import type { Theme } from '@unocss/preset-mini'
import type { ResolveOnuOptions } from '../types'
import { createOklchTheme } from '../utils'
import { semanticColor } from './semantic'

export function theme(options: ResolveOnuOptions): Theme {
  const { color } = options
  const colors = createOklchTheme(color)
  // Gray basic color
  const grays = createOklchTheme('#888888')

  return {
    colors: {
      context: 'oklch(var(--onu-color-context))',
      background: semanticColor('background'),
      foreground: semanticColor('foreground'),
      card: {
        DEFAULT: semanticColor('card'),
        foreground: semanticColor('card-foreground'),
      },
      popover: {
        DEFAULT: semanticColor('popover'),
        foreground: semanticColor('popover-foreground'),
      },
      primary: {
        DEFAULT: semanticColor('primary'),
        foreground: semanticColor('primary-foreground'),
        ...colors,
      },
      secondary: {
        DEFAULT: semanticColor('secondary'),
        foreground: semanticColor('secondary-foreground'),
      },
      muted: {
        DEFAULT: semanticColor('muted'),
        foreground: semanticColor('muted-foreground'),
      },
      accent: {
        DEFAULT: semanticColor('accent'),
        foreground: semanticColor('accent-foreground'),
      },
      destructive: {
        DEFAULT: semanticColor('destructive'),
        foreground: semanticColor('destructive-foreground'),
      },
      border: semanticColor('border'),
      input: semanticColor('input'),
      ring: semanticColor('ring'),
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
