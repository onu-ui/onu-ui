import type { DynamicShortcut, Rule, StaticShortcut } from '@unocss/core'
import type { IconsOptions } from '@unocss/preset-icons'
import type { Theme } from '@unocss/preset-mini'
import type { WebFontMeta } from '@unocss/preset-web-fonts'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' // default: md

export interface PrsetOnuOptions {
  /**
   * Theme primary color.
   *
   * @default 'auto' (random color)
   */
  color?: string

  /**
   * Enable preflights styles. (Reset styles)
   *
   * @default true
   */
  preflights?: boolean

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
