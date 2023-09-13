import type { Preset } from '@unocss/core'
import type { UsefulOptions } from 'unocss-preset-useful'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'
export type ThemeType = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

export interface PrsetOnuOptions extends UsefulOptions {
  /**
   * Prefix of all of Onu's utility.
   *
   * @default 'o-'
   */
  prefix?: string
}

export type ResolveOnuOptions = Required<PrsetOnuOptions> & {
  presets: Preset[]
}
