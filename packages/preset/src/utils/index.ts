import type { Theme } from '@unocss/preset-wind4'
import type { CSSValue } from 'unocss'
import { parseColor } from '@unocss/preset-wind4/utils'
import { mc } from 'magic-color'

export const neutralTheme = {
  50: 'oklch(98.5% 0 0)',
  100: 'oklch(97% 0 0)',
  200: 'oklch(92.2% 0 0)',
  300: 'oklch(87% 0 0)',
  400: 'oklch(70.8% 0 0)',
  500: 'oklch(55.6% 0 0)',
  600: 'oklch(43.9% 0 0)',
  700: 'oklch(37.1% 0 0)',
  800: 'oklch(26.9% 0 0)',
  900: 'oklch(20.5% 0 0)',
  950: 'oklch(14.5% 0 0)',
} as const

export function createOklchTheme(color: string) {
  const colors = mc.theme(color, { type: 'oklch' })

  return Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [key, value.replace(/NaN/g, '0')]),
  ) as typeof colors
}

export function spliteSpace(str: string) {
  return str.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ')
}

/**
 * Resolve context color as OKLCH components.
 *
 * @param str color string
 * @param theme Uno theme
 * @returns OKLCH string without `oklch()`
 *
 * @example
 * ```ts
 * resolveContextColor('red', theme) => '63.7% 0.237 25.331'
 * ```
 */
export function resolveContextColor(str: string, theme: Theme): string | undefined {
  const color = parseColor(str, theme)
  if (color) {
    if (color.cssColor?.type === 'oklch') {
      if (color.cssColor.components) {
        return `${color.cssColor.components.join(' ')}`
      }
    }
    else {
      if (color.color && mc.valid(color.color)) {
        try {
          const magicColor = mc(color.color)
          const [lightness, chroma, hue] = magicColor.oklch(false)
          return `${lightness}% ${chroma} ${Number.isFinite(hue) ? hue : 0}`
        }
        catch {
          return undefined
        }
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
 *   '--onu-color-context': '63.7% 0.237 25.331',
 * }
 *
 * resolveContextColorByKey([, , red], theme, '--onu-color-context')
 *
 * => {
 *   '--onu-color-context': '63.7% 0.237 25.331',
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
  const keys = ['DEFAULT', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950', 'primary', 'text', 'bg', 'border', 'context']
  return keys.includes(key)
}
