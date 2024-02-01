import type { Theme } from '@unocss/preset-mini'
import type { ResolveOnuOptions } from '../types'

export function theme(options: ResolveOnuOptions): Theme {
  return {
    colors: {
      context: 'rgb(var(--onu-c-context) / %alpha)',
      primary: options.color,
    },
  }
}
