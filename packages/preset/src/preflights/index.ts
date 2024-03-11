import type { Preflight } from 'unocss'
import type { ResolveOnuOptions } from '../types'
import { resetPreflight } from './reset'
import { themePreflight } from './theme'

export function preflights(options: ResolveOnuOptions): Preflight[] {
  return [
    resetPreflight,
    themePreflight(options),
  ]
}
