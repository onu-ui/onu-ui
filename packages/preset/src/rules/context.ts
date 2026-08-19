import type { CustomRule } from '../types'
import { h, parseColor } from '@unocss/preset-wind4/utils'
import { isThemeMetaKey, resolveContextColor, resolveContextColorByKey } from '../utils'

export const contexts: CustomRule[] = [
  /**
   * o-<color> o-theme-<color>
   * Any color type for context. Will be converted to OKLCH.
   *
   * @example
   * o-red
   * o-#ff0
   * o-[rgb(255,255,0)]
   *
   * ```ts
   * {
   *  '--onu-color-context': 96.8% 0.211 109.8,
   * }
   * ```
   *
   * @example
   * o-theme-100
   * o-theme-DEFAULT
   *
   * ```ts
   * {
   *  '--onu-color-context': var(--onu-color-100),
   * }
   * ```
   */
  [/^o-(theme-)?(.*)$/, (matches, { theme }) => resolveContextColorByKey(matches, theme, '--onu-color-context')],

  /**
   * o-bg-<color> o-bg-theme-<color>
   * Background color for context.
   *
   * @example
   * o-bg-red
   */
  [/^o-bg-(theme-)?(.*)$/, (matches, { theme }) => resolveContextColorByKey(matches, theme, '--onu-color-bg')],

  /**
   * o-text-<color> o-text-theme-<color>
   * Text color for context.
   *
   * @example
   * o-text-red
   */
  [/^o-text-(theme-)?(.*)$/, (matches, { theme }) => resolveContextColorByKey(matches, theme, '--onu-color-text')],

  /**
   * o-border-<color> o-border-theme-<color>
   * Border color for context.
   *
   * @example
   * o-border-red
   */
  [/^o-border-(theme-)?(.*)$/, (matches, { theme }) => resolveContextColorByKey(matches, theme, '--onu-color-border')],

  [/^bg-theme-(\w+)(?:[-:](\d+))?$/, ([, key, alpha]) => {
    key = key === 'context' ? 'bg' : key
    if (isThemeMetaKey(key)) {
      return {
        '--un-bg-opacity': alpha ? `${Number.parseInt(alpha)}%` : '100%',
        'background-color': `oklch(var(--onu-color-${key}, var(--onu-color-context)) / var(--un-bg-opacity))`,
      }
    }
  }],
  [/^text-theme-(\w+)(?:[-:](\d+))?$/, ([, key, alpha]) => {
    key = key === 'context' ? 'text' : key
    if (isThemeMetaKey(key)) {
      return {
        '--un-text-opacity': alpha ? `${Number.parseInt(alpha)}%` : '100%',
        'color': `oklch(var(--onu-color-${key}, var(--onu-color-context)) / var(--un-text-opacity))`,
      }
    }
  }],
  [/^border-theme-(\w+)(?:[-:](\d+))?$/, ([, key, alpha]) => {
    key = key === 'context' ? 'border' : key
    if (isThemeMetaKey(key)) {
      return {
        '--un-border-opacity': alpha ? `${Number.parseInt(alpha)}%` : '100%',
        'border-color': `oklch(var(--onu-color-${key}, var(--onu-color-context)) / var(--un-border-opacity))`,
      }
    }
  }],
  /**
   * Any variable for any value.
   *
   * @returns
   * ```ts
   *  {
   *    --onu-custom-variable: value
   *  }
   * ```
   *
   * @example
   * [variable::color]
   * [varibale::theme-50]
   * [varibale::theme-key-alpha]
   * [varibale::anything]
   */
  [/^\[([^:]+)::(.+?)(?:-(\d+))?\]$/, ([, variable, name, no], { theme }) => {
    const cssCustomKey = `--${variable}`
    if (name === 'theme' && no != null) {
      return {
        [cssCustomKey]: `oklch(var(--onu-color-${no}) / 1)`,
      }
    }

    const color = parseColor(`${name}${no ? `-${no}` : ''}`, theme)
    if (color) {
      const maybeColor = resolveContextColor(`${name}${no ? `-${no}` : ''}`, theme)

      if (maybeColor) {
        const cssCustomOpacityKey = `${cssCustomKey}-opacity`
        return {
          [cssCustomOpacityKey]: color.cssColor?.alpha ?? 1,
          [cssCustomKey]: `oklch(${maybeColor} / var(${cssCustomOpacityKey}))`,
        }
      }
    }

    return {
      [cssCustomKey]: h.bracket(name) ?? name,
    }
  }],

  [/^o-radius(?:-(.+))?$/, ([,d]) => {
    const rounds: any = {
      sm: -4,
      md: -2,
      lg: 0,
      xl: 4,
    }

    if (d in rounds) {
      return {
        'border-radius': `calc(var(--onu-radius) + ${rounds[d]}px)`,
      }
    }
  }],
]
