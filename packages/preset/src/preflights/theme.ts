import type { Preflight } from '@unocss/core'
import type { ResolveOnuOptions } from '../types'
import { resolveTheme } from '../helper'
import { LAYER_ONU_PRELIGHT } from '../layers'

export function themePreflight(options: ResolveOnuOptions): Preflight {
  const { color } = options

  return {
    getCSS: () => resolveTheme(color).cssMinify,
    layer: LAYER_ONU_PRELIGHT,
  }
}
