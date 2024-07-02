import { h, parseColor } from '@unocss/preset-mini/utils'
import type { Rule, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

export const rules = [
  [/^o-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    // if (h.cssvar(body) != null) {
    //   return {
    //     '--onu-color-context': h.cssvar(body),
    //   }
    // }

    const color = parseColor(body, theme)
    console.log(body)
    console.log(color)
    console.log('\n')

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
] as Rule<Theme>[]
