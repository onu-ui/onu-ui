import type { Preflight } from '@unocss/core'
import type { ResolveOnuOptions } from '../types'
import { LAYER_ONU_PRELIGHT } from '../layers'
import { resetPreflight } from './reset'
import { themePreflight } from './theme'

export function preflights(options: ResolveOnuOptions): Preflight[] {
  return options.preflights
    ? [
        resetPreflight,
        themePreflight(options),
      ].map((p) => {
        return {
          ...p,
          layer: LAYER_ONU_PRELIGHT,
        }
      })
    : []
}
