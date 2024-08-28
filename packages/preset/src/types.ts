import type { WebFontMeta } from '@unocss/preset-web-fonts'
import type { IconsOptions } from '@unocss/preset-icons'
import type { DynamicShortcut, Rule, StaticShortcut } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' // default: md

export interface PrsetOnuOptions {
  /**
   * Prefix of all of Onu's utility.
   *
   * @default (In Vue component, it will be 'o-')
   */
  prefix?: string

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
