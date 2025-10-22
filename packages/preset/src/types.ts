import type { DynamicShortcut, Rule, StaticShortcut } from '@unocss/core'
import type { IconsOptions } from '@unocss/preset-icons'
import type { WebFontMeta } from '@unocss/preset-web-fonts'
import type { Theme } from '@unocss/preset-wind4'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' // default: md

export interface PrsetOnuOptions {
  /**
   * Theme primary color.
   *
   * @default 'auto' (random color)
   */
  color?: string

  /**
   * Onu default font loaded by google fonts.
   *
   * @default ['DM Sans', 'DM Sans:400,700']
   * @example `font-onu`
   */
  fonts?: WebFontMeta | string | (WebFontMeta | string)[]

  /**
   * Icons options.
   */
  icons?: IconsOptions
}

export type ResolveOnuOptions = Required<PrsetOnuOptions>

export type CustomRule = Rule<Theme>
export type CustomShortcut = StaticShortcut | DynamicShortcut<Theme>
