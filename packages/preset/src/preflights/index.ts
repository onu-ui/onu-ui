import type { Preflight } from '@unocss/core'
import type { ResolveOnuOptions } from '../types'
import { resetPreflight } from './reset'
import { themePreflight } from './theme'

export function preflights(options: ResolveOnuOptions): Preflight[] {
  return options.preflights
    ? [
        resetPreflight,
        themePreflight(options),
      ]
    : []
}
