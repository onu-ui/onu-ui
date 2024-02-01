import { parseColor } from '@unocss/preset-mini/utils'
import type { Rule, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

export const rules = [
  [/^o-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
      return {
        '--onu-c-context': `${color.cssColor.components.join(',')}`,
      }
    }
    else {
      return {
        '--onu-c-context': color?.color,
      }
    }
  }],
] as Rule<Theme>[]
