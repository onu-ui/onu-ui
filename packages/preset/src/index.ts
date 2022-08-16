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
      boxShadow: {
        xs: 'var(--un-shadow-inset) 0 1px 1px 0 var(--un-shadow-color, rgba(0,0,0,0.03))',
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
        opacity: 0.4,
        cursor: 'not-allowed',
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
    shortcuts: [
      {
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
        'o-solid': 'bg-context border-context c-white',
        'o-light': `!shadow-transparent bg-context:12 hover-bg-context active-bg-context:64
                   !border-context !hover-border-context !active-border-context:64
                   !c-context !hover-c-white !active-c-white`,
        'o-text': `!shadow-transparent !bg-transparent !hover-bg-context:32 !active-bg-context:12
                   !border-transparent
                   !c-context`,

        // button
        'o-button-base': 'fcc gap-1 inline-flex cursor-pointer rounded shadow-context:50 !outline-none c-context o-solid border',
        'o-button-hover': 'hover-border-context:64 hover-text-white hover-bg-context:64',
        'o-button-active': 'active-border-context:32 active-text-white active-bg-context:32',
        'o-button-light': 'o-light',
        'o-button-text': 'o-text',
        'o-button-xs': 'px-2.5 h-6 text-xs shadow-xs',
        'o-button-sm': 'px-3 h-7 text-sm shadow-sm',
        'o-button-md': 'px-4 h-8 text-sm shadow-md',
        'o-button-lg': 'px-4 h-9 text-md shadow-lg',

        // avatar
        'o-avatar-base': 'fcc overflow-hidden border-box shadow-sm bg-[#c0c4cc] text-white',
        'o-avatar-icon': 'text-2em',
        'o-avatar-txt': 'text-2em',
        'o-avatar-size-small': 'w-3em h-3em',
        'o-avatar-size-default': 'w-4em h-4em',
        'o-avatar-size-large': 'w-5em h-5em',
        'o-avatar-fit-fill': 'object-fill',
        'o-avatar-fit-contain': 'object-contain',
        'o-avatar-fit-cover': 'object-cover',
        'o-avatar-fit-none': 'object-none',
        'o-avatar-fit-scale-down': 'object-scale-down',

        // card
        'o-card-base': 'rounded-lg shadow-lg p-8 bg-gradient-from-rgba(255, 255, 255, 0.2) bg-gradient-to-rgba(255, 255, 255, 0.035) backdrop-blur-lg overflow-hidden',
      },
    ],
  }
}
