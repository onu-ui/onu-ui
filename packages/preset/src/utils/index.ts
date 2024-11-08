import type { Theme } from '@unocss/preset-mini'
import type { CSSValue } from 'unocss'
import { parseColor } from '@unocss/preset-mini/utils'
import { mc } from 'magic-color'

export function spliteSpace(str: string) {
  return str.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ')
}

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

/**
 * Resolve context color by key.
 *
 * @param matches RegExp matches
 * @param theme Theme
 * @param key display key or theme key
 * @returns CSSValueInput | undefined
 *
 * @example
 * ```ts
 * resolveContextColorByKey([, theme, 500], theme, '--onu-color-context')
 *
 * => {
 *   '--onu-color-context': '0 100 50',
 * }
 *
 * resolveContextColorByKey([, , red], theme, '--onu-color-context')
 *
 * => {
 *   '--onu-color-context': '0 100 50',
 * }
 * ```
 */
export function resolveContextColorByKey(matches: RegExpMatchArray, theme: Theme, key: string): CSSValue | undefined {
  if (matches[1] != null && isThemeMetaKey(matches[2])) {
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

export function resolveRuleWithContext(s: string, theme: Theme, key: string) {
  const withTheme = s.split('-')
  let value: CSSValue | undefined
  if (withTheme.length === 2 && withTheme[0] === 'theme') {
    value = resolveContextColorByKey([undefined, ...withTheme] as any, theme, key)
  }
  else {
    value = resolveContextColorByKey([undefined, undefined, s] as any, theme, key)
  }
  if (value)
    return [value]
}

export function isThemeMetaKey(key: string) {
  const keys = ['DEFAULT', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950', 'text', 'bg', 'border', 'context']
  return keys.includes(key)
}
