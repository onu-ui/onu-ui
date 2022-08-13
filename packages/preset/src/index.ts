import { parseColor } from '@unocss/preset-mini/utils'
import type { Preset, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-uno'

export function presetOnu(): Preset {
  return {
    name: '@onu-ui/preset',
    theme: {
      colors: {
        context: 'rgba(var(--onu-c-context),%alpha)',
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
    shortcuts: {
      // general
      'o-bg-base': 'bg-white dark:bg-[#222]',
      'o-border-base': 'border-gray-400/50',
      'o-border-300': 'border-gray-400/40',
      'o-border-200': 'border-gray-400/25',
      'o-transition': 'transition-all duration-200',
      'o-focus-base': 'ring-2 ring-context/50',
      'o-active-base': 'ring-3 ring-context/10',
      'o-borderless': '!border-none !shadow-none',

      // button
      'o-button-base': 'border !border-white text-white cursor-pointer o-border-base rounded shadow-sm px-1em py-0.25em inline-flex items-center gap-1 op80 !outline-none',
      'o-button-link': 'decoration-none',
      'o-button-hover': 'op100 !border-context text-context',
      'o-button-active': 'o-active-base bg-context/5',
      'o-button-icon': '-ml-0.2em mr-0.2em text-1.1em',

      // avatar
      'o-avatar-base': 'border-circle rounded-full shadow-sm',
      'o-avatar-icon': 'text-2em',

      // card
      'o-card-base': 'rounded-lg shadow-lg p-8 bg-gradient-from-rgba(255, 255, 255, 0.2) bg-gradient-to-rgba(255, 255, 255, 0.035) backdrop-blur-lg overflow-hidden',
    },
  }
}
