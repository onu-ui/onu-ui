import { parseColor } from '@unocss/preset-mini/utils'
import { commonShortcuts } from './shortcuts'
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
      ['o-solid', {
        'background-color': 'rgba(var(--onu-c-context), 1) !important',
        'border-color': 'rgba(var(--onu-c-context), 1)',
        'color': 'white !important'
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
      ...commonShortcuts,
      // general
      // 'o-bg-base': 'bg-white dark:bg-[#222]',
      'o-border-base': 'border-gray-400/50',
      'o-border-300': 'border-gray-400/40',
      'o-border-200': 'border-gray-400/25',
      'o-transition': 'transition-all duration-200',
      'o-focus-base': 'ring-2 ring-context/50',
      'o-active-base': 'ring-3 ring-context/10',
      'o-borderless': '!border-none !shadow-none',
      'o-solid': '!bg-context !border-context !c-white',
      'o-light': '!bg-transparent !border-context !c-context',

      // button
      'o-button-base': 'fcc gap-1 inline-flex px-1em py-0.25em cursor-pointer rounded text-sm !outline-none c-context o-solid border',
      'o-button-light': 'o-light',
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
