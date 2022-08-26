import { parseColor } from '@unocss/preset-mini/utils'
import { commonShortcuts } from './shortcuts'
import type { Preset, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-uno'

type SizeType = 'xs' | 'sm' | 'md' | 'lg'

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
        placeholder: '#dcdcdc',
      },
      fontFamily: {
        sans: 'Avenir, Helvetica, Arial, sans-serif',
      },
      boxShadow: {
        xs: 'var(--un-shadow-inset) 0 1px 1px 0 var(--un-shadow-color, rgba(0,0,0,0.03))',
      },
      animation: {
        keyframes: {
          switching: `{0%{ box-shadow: 0 0 0 2px #1890ff66; }
            60%{ box-shadow: 0 0 0 4px #1890ff33; }
            80%{ box-shadow: 0 0 0 6px #1890ff1a; }
            100%{ box-shadow: 0 0 0 8px #1890ff0d; }}`,
        },
        durations: {
          switching: '0.3s',
        },
      },
    },
    rules: [
      [
        /^o-(.*)$/,
        ([, body]: string[], { theme }: RuleContext<Theme>) => {
          const color = parseColor(body, theme)
          if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
            return {
              '--onu-c-context': `${color.cssColor.components.join(',')}`,
            }
          }
        },
      ],
      ['o-dashed', { 'border-style': 'dashed' }],
      [
        'o-solid',
        {
          'background-color': 'rgba(var(--onu-c-context), 1) !important',
          'border-color': 'rgba(var(--onu-c-context), 1)',
          'color': 'white !important',
        },
      ],
      [
        'o-disabled',
        {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
      ],
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
        'o-button-base':
          'fcc gap-1 inline-flex cursor-pointer rounded shadow-context:50 !outline-none c-context o-solid border',
        'o-button-hover':
          'hover-border-context:64 hover-text-white hover-bg-context:64',
        'o-button-active':
          'active-border-context:32 active-text-white active-bg-context:32',
        'o-button-light': 'o-light',
        'o-button-text': 'o-text',
        'o-button-xs': 'px-2.5 h-6 text-xs shadow-xs',
        'o-button-sm': 'px-3 h-7 text-sm shadow-sm',
        'o-button-md': 'px-4 h-8 text-sm shadow-md',
        'o-button-lg': 'px-4 h-9 text-md shadow-lg',

        // avatar
        'o-avatar-base':
          'fcc overflow-hidden shadow-sm aspect-square rounded-full bg-context text-white',
        'o-avatar-mode-bg': 'bg-cover',
        'o-avatar-mode-img': 'object-cover select-none',
        'o-avatar-xs': 'h-6 text-xs shadow-xs',
        'o-avatar-sm': 'h-8 text-sm shadow-sm',
        'o-avatar-md': 'h-10 text-sm shadow-md',
        'o-avatar-lg': 'h-15 text-md shadow-md',
        'o-avatar-group-base': 'flex space-x--4 children-relative',

        // card
        'o-card-base':
          'rounded-lg shadow-lg p-8 bg-gradient-from-rgba(255, 255, 255, 0.2) bg-gradient-to-rgba(255, 255, 255, 0.035) backdrop-blur-lg overflow-hidden',
        'o-card':
          'ma-0 pa-0 list-none relative  b-rd-1 bg-white transition-shadow box-border text-sm',
        'o-card-header': 'fb px6 py',
        'o-card-body': 'px-6 py lh-normal',
        'o-card-footer': 'px-6 py',
        'o-card-header-wrapper': 'flex flex-1 items-center',
        'o-card-footer-wrapper': '',
        'o-card-header-title': 'text-4',
        'o-card-actions': 'float-right text-blue flex',
        'o-card-md': 'w-md',
        'o-card-sm': 'w-sm',
        'o-card-bordered': 'border o-border-base',
        'o-card-header-bordered': 'border-b o-border-base',
        'o-card-shadow-hover': 'hover--shadow-lg',
        'o-card-shadow': 'shadow-md',
        'o-card-header-subtitle': 'text-2 text-gray pl-2 break-all',
        'o-card-header-description': 'text-2 text-gray mt-2 break-all',

        // icon
        'o-icon-base': 'c-context text-md',

        // switch
        'o-switch':
          '!animate-count-1 relative flex rounded-999px cursor-pointer items-center bg-context',
        'o-switch-size-small': 'w-min h-1em leading-1em min-w-1.6em',
        'o-switch-size-medium': 'w-min h-1.4em leading-1.4em min-w-2.2em',
        'o-switch-size-large': 'w-min h-1.8em leading-1.8em min-w-3em',
        'o-switch-circle': 'fcc rounded-999px bg-white',
        'o-switch-size-small-circle': 'h-0.75em w-0.75em',
        'o-switch-size-medium-circle': 'h-1em w-1em',
        'o-switch-size-large-circle': 'h-1.45em w-1.45em',
        'o-switch-uncheck-circle': 'absolute mr-0.1em left-0.1em',
        'o-switch-check-circle': 'absolute ml-0.1em right-0.1em',
        'o-switch-small-slot-check': 'ml-0.25em mr-1em',
        'o-switch-medium-slot-check': 'ml-0.25em mr-1.25em',
        'o-switch-large-slot-check': 'ml-0.25em mr-1.5em',
        'o-switch-small-slot-uncheck': 'mr-0.25em ml-1em',
        'o-switch-medium-slot-uncheck': 'mr-0.25em ml-1.25em',
        'o-switch-large-slot-uncheck': 'mr-0.25em ml-1.5em',
      },
      [/^o-avatar-group-(.*)$/, ([,s]) => {
        if (['xs', 'sm', 'md', 'lg'].includes(s)) {
          const size = s as SizeType
          const avatarSizeMap: Record<SizeType, string> = {
            xs: 'h-6 text-xs shadow-xs',
            sm: 'h-8 text-sm shadow-sm',
            md: 'h-10 text-sm shadow-md',
            lg: 'h-15 text-md shadow-md',
          }
          const avatarGroupSpaceMap: Record<SizeType, string> = {
            xs: 'space-x--2',
            sm: 'space-x--3',
            md: 'space-x--4',
            lg: 'space-x--6',
          }
          return `important-${avatarGroupSpaceMap[size]} ${avatarSizeMap[size].split(' ').map(selector => `important-children-${selector}`).join(' ')}`
        }
      }],
    ],
  }
}
