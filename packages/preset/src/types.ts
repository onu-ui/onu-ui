import type { WebFontMeta } from '@unocss/preset-web-fonts'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' // default: md
export type ThemeType = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

export interface PrsetOnuOptions {
  /**
   * Prefix of all of Onu's utility.
   *
   * @default 'o-'
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
  font?: WebFontMeta | string | (WebFontMeta | string)[]
}

export type ResolveOnuOptions = Required<PrsetOnuOptions>
