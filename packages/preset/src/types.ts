import type { AttributifyOptions } from '@unocss/preset-attributify'
import type { IconsOptions } from '@unocss/preset-icons'
import type { PresetUnoOptions } from '@unocss/preset-uno'
import type { Preset } from 'unocss'
import type { UsefulOptions } from 'unocss-preset-useful'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'
export type ThemeType = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

export interface PrsetOnuOptions {
  /**
   * Prefix of all of Onu's utility.
   *
   * @default 'o-'
   */
  prefix?: string

  /**
   * PresetUseful PrsetOnuOptions. See https://github.com/zyyv/unocss-preset-useful.
   * @default true
   */
  useful?: boolean | UsefulOptions

  /**
   * Enable the default preset
   * Only works when `presets` is not specified
   * @default true
   */
  uno?: boolean | PresetUnoOptions

  /**
   * Enable attributify mode and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  attributify?: boolean | AttributifyOptions

  /**
   * Enable icons preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  icons?: boolean | IconsOptions
}

export type ResolveOnuOptions = Required<PrsetOnuOptions> & {
  presets: Preset[]
}
