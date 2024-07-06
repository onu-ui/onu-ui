import { parseColor } from '@unocss/preset-mini/utils'
import type { CSSValueInput, Rule, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { mc } from 'magic-color'

function resolveContextColor(matches: RegExpMatchArray, theme: Theme): string | undefined {
  const color = parseColor(matches[2], theme)
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

  const color = resolveContextColor(matches, theme)
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
]
