import type { Theme } from '@unocss/preset-mini'
import { mc } from 'magic-color'
import type { ResolveOnuOptions } from '../types'

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
  }
}
