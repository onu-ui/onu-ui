import type { Preflight } from '@unocss/core'
import type { ResolveOnuOptions } from '../types'
import { resolveTheme } from '../helper'

export function themePreflight(options: ResolveOnuOptions): Preflight {
  const { color } = options

  return {
    getCSS: () => resolveTheme(color).cssMinify,
  }
}
