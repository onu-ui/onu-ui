import type { Preflight } from '@unocss/core'
import type { ResolveOnuOptions } from '../types'
import { themePreflight } from './theme'

export function preflights(options: ResolveOnuOptions): Preflight[] {
  return [
    themePreflight(options),
  ]
}
