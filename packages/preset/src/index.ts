import { parseColor } from '@unocss/preset-mini/utils'
import shortcuts from './shortcuts/index'
import type { Preset, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-uno'

export function presetOnu(): Preset {
  return {
    name: '@onu-ui/preset',
    theme: {
      colors: {
        context: 'rgba(var(--onu-c-context),%alpha)',
        primary: '#a855f7',
        secondary: '#1ABCFE',
        success: '#0ACF83',
        warning: '#FF9F43',
        error: '#FF5C5C',
        info: '#373e47',
      },
      fontFamily: {
        sans: 'Avenir, Helvetica, Arial, sans-serif',
      },
    },
    rules: [
      [/^o-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
          return {
            '--onu-c-context': `${color.cssColor.components.join(',')}`,
          }
        }
      }],
      ['o-dashed', { 'border-style': 'dashed' }],
      ['o-solid', {
        'background-color': 'rgba(var(--onu-c-context), 1) !important',
        'border-color': 'rgba(var(--onu-c-context), 1)',
        'color': 'white !important',
      }],
      ['o-disabled', {
        'opacity': 0.4,
        'pointer-events': 'none',
        'cursor': 'not-allowed',
      }],
    ],
    variants: [
      (input: string) => {
        const prefix = 'o-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`,
          }
        }
      },
      (input: string) => {
        const prefix = 'o-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`,
          }
        }
      },
    ],
    shortcuts,
  }
}
