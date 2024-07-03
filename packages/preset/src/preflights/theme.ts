import type { Preflight } from 'unocss'
import type { ResolveOnuOptions } from '../types'
import { resolveTheme } from '../utils'

export function themePreflight(options: ResolveOnuOptions): Preflight {
  const { color } = options

  return {
    getCSS: () => resolveTheme(color).css,
    layer: '@onu-ui/preset-theme',
  }
}
