import { h, parseColor } from '@unocss/preset-mini/utils'
import type { CSSValueInput, Rule } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { mc } from 'magic-color'

/**
 * Resolve context color for hsl string.
 *
 * @param str color string
 * @param theme Uno theme
 * @returns hsl string without `hsl()`
 *
 * @example
 * ```ts
 * resolveContextColor('red', theme) => '0 100 50'
 * ```
 */
function resolveContextColor(str: string, theme: Theme): string | undefined {
  const color = parseColor(str, theme)
  if (color) {
    if (color.cssColor?.type === 'hsl') {
      if (color.cssColor.components) {
        return `${color.cssColor.components.join(' ')}`
      }
    }
    else {
      if (color.color && mc.valid(color.color)) {
        const magicColor = mc(color.color)
        return `${magicColor.hsl().join(' ')}`
      }
    }
  }
}

function resolveContextColorByKey(matches: RegExpMatchArray, theme: Theme, key: string): CSSValueInput | undefined {
  if (matches[1] != null) {
    return {
      [key]: `var(--onu-color-${matches[2]})`,
    }
  }

  const color = resolveContextColor(matches[2], theme)
  if (color) {
    return {
      [key]: color,
    }
  }
}

export const contexts: Rule<Theme>[] = [
  /**
   * o-<color> o-theme-<color>
   * Any color type for context. Will be converted to HSL.
   *
   * @example
   * o-red
   * o-#f00
   * o-[rgb(255,0,0)]
   *
   * @returns
   *
   * ```ts
   * {
   *  '--onu-color-context': 255 100 50,
   * }
   * ```
   *
   * @example
   * o-theme-100
   * o-theme-DEFAULT
   *
   * @returns
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

  [/^bg-theme-(\w+)(?:-|:(\d+))?$/, ([, key, alpha]) => {
    key = key === 'context' ? 'bg' : key
    return {
      '--un-bg-opacity': alpha ? `${Number.parseInt(alpha) / 100}` : '1',
      'background-color': `hsl(var(--onu-color-${key}, var(--onu-color-context)) / var(--un-bg-opacity))`,
    }
  }],
  [/^text-theme-(\w+)(?:-|:(\d+))?$/, ([, key, alpha]) => {
    key = key === 'context' ? 'text' : key
    return {
      '--un-text-opacity': alpha ? Number.parseInt(alpha) / 100 : 1,
      'color': `hsl(var(--onu-color-${key}, var(--onu-color-context)) / var(--un-text-opacity))`,
    }
  }],
  [/^border-theme-(\w+)(?:-|:(\d+))?$/, ([, key, alpha]) => {
    key = key === 'context' ? 'border' : key
    return {
      '--un-border-opacity': alpha ? Number.parseInt(alpha) / 100 : 1,
      'border-color': `hsl(var(--onu-color-${key}, var(--onu-color-context)) / var(--un-border-opacity))`,
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
        [cssCustomKey]: `hsl(var(--onu-color-${no}) / 1)`,
      }
    }

    const color = parseColor(`${name}${no ? `-${no}` : ''}`, theme)
    if (color) {
      let maybeColor = ''
      if (color.cssColor?.type === 'hsl') {
        if (color.cssColor.components) {
          maybeColor = `${color.cssColor.components.join(' ')}`
        }
      }
      else {
        if (color.color && mc.valid(color.color)) {
          const magicColor = mc(color.color)
          maybeColor = `${magicColor.hsl().join(' ')}`
        }
      }

      if (maybeColor) {
        const cssCustomOpacityKey = `${cssCustomKey}-opacity`
        return {
          [cssCustomOpacityKey]: color.cssColor?.alpha ?? 1,
          [cssCustomKey]: `hsl(${maybeColor} / var(${cssCustomOpacityKey}))`,
        }
      }
    }

    return {
      [cssCustomKey]: h.bracket(name) ?? name,
    }
  }],
]
