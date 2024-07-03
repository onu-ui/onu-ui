import { parseColor } from '@unocss/preset-mini/utils'
import type { Rule, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

export const rules = [
  [/^o-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'hsl' && color.cssColor.components) {
      return {
        '--onu-color-context': `${color.cssColor.components.join(' ')}`,
      }
    }
    else {
      return {
        '--onu-color-context': color?.color,
      }
    }
  }],
  [/^o-theme-(\w+)$/, ([, key]) => {
    return {
      '--onu-color-context': `var(--onu-color-${key})`,
    }
  }],
  [/^bg-theme-(\w+)(?:-|\/(\d+))?$/, ([, key, alpha]) => {
    return {
      '--un-bg-opacity': alpha ? `${Number.parseInt(alpha) / 100}` : '1',
      'background-color': `hsl(var(--onu-color-${key}) / var(--un-bg-opacity))`,
    }
  }],
  [/^text-theme-(\w+)(?:-|\/(\d+))?$/, ([, key, alpha]) => {
    return {
      '--un-text-opacity': alpha ? Number.parseInt(alpha) / 100 : 1,
      'color': `hsl(var(--onu-color-${key}) / var(--un-text-opacity))`,
    }
  }],
] as Rule<Theme>[]
