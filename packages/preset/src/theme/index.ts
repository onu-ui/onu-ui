import type { Theme } from '@unocss/preset-mini'
import { theme as themeGenerator } from 'magic-color'
import type { ResolveOnuOptions } from '../types'

export function theme(options: ResolveOnuOptions): Theme {
  return {
    colors: {
      context: 'rgb(var(--onu-c-context) / %alpha)',
      primary: {
        DEFAULT: options.color,
        ...themeGenerator(options.color),
      },
    },
  }
}
