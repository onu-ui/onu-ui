import { parseColor } from '@unocss/preset-mini/utils'
import { commonShortcuts } from './shortcuts'
import { SwitchSizeMap } from './constants'
import type { ParsedColorValue, Preset, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-uno'

type SizeType = 'xs' | 'sm' | 'md' | 'lg'

export const theme: Theme = {
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
    switch: 'calc(var(--o-switch-offset) * -1) 0 0 2px var(--o-switch-bc) inset, 0 0 0 2px var(--o-switch-bc) inset;',
    switchActive: 'calc(var(--o-switch-offset)) 0 0 2px var(--o-switch-c) inset, 0 0 0 2px var(--o-switch-c) inset;',
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
}

export function parseColors(body: string, _theme: Theme = theme): ParsedColorValue | undefined {
  return parseColor(body, _theme)
}

export function presetOnu(): Preset {
  return {
    name: '@onu-ui/preset',
    theme,
    rules: [
      [/^o-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
          return {
            '--onu-c-context': `${color.cssColor.components.join(',')}`,
          }
        }
      }],
      [/^o-switch-(.+)$/, ([, s]: string[]) => {
        if (['sm', 'md', 'lg'].includes(s)) {
          return {
            '--o-switch-offset': SwitchSizeMap[s][2],
            'width': SwitchSizeMap[s][0],
            'height': SwitchSizeMap[s][1],
          }
        }
      }],
      ['o-dashed', { 'border-style': 'dashed' }],
      ['o-solid', { 'background-color': 'rgba(var(--onu-c-context), 1) !important', 'border-color': 'rgba(var(--onu-c-context), 1)', 'color': 'white !important' }],
      ['o-disabled', { opacity: 0.4, cursor: 'not-allowed !important' }],
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
        'o-avatar-base': 'fcc of-hidden shadow-sm aspect-square rounded-full bg-context text-white',
        'o-avatar-mode-bg': 'bg-cover',
        'o-avatar-mode-img': 'object-cover select-none',
        'o-avatar-xs': 'h-6 text-xs shadow-xs',
        'o-avatar-sm': 'h-8 text-sm shadow-sm',
        'o-avatar-md': 'h-10 text-sm shadow-md',
        'o-avatar-lg': 'h-15 text-md shadow-md',
        'o-avatar-group-base': 'flex space-x--4 children-relative',

        // card
        'o-card-bg': 'bg-gradient-linear bg-gradient-from-rgba(255, 255, 255, 0.2) bg-gradient-to-rgba(255, 255, 255, 0.035) backdrop-blur-lg',
        'o-card-base': 'o-card-bg o-transition list-none relative rounded-md c-context w-full of-hidden',
        'o-card': 'o-card-base h-fit',
        'o-card-md': 'rounded-md shadow-md text-sm',
        'o-card-sm': 'rounded-sm shadow-sm text-xs',
        'o-card-cover': 'children-w-full children-aspect-video',
        'o-card-header': 'fb px-4 py-2.5',
        'o-card-header-wrapper': 'flex flex-col flex-1 gap-1.5',
        'o-card-header-title': 'text-md',
        'o-card-header-description': 'text-xs c-context:60 break-all !m-0',
        'o-card-header-extra': '',
        'o-card-body': 'p-4 pt-1.5 leading-normal text-sm',
        'o-card-actions': 'p-4 pt-2',
        'o-card-bordered': 'border border-light-700 dark:border-#4C4D4F important-shadow-none',
        'o-card-hoverable': 'hover-translate-y--1 hover-important-shadow-md',

        // icon
        'o-icon-base': 'c-context text-md',

        // switch
        'o-switch-base': 'b-(~ $o-switch-bc) bg-$o-switch-dot',
        'o-switch-base-active': 'checked-(b-context bg-$o-switch-dot-active)',
        'o-switch-shadow': 'shadow-switch checked-shadow-switchActive',
        'o-switch': 'o-switch-base o-switch-base-active o-switch-shadow appearance-none cursor-pointer flex-shrink-0 o-transition duration-300 rounded-full',
        'o-switch-disabled': 'o-disabled',

        // checkbox
        'o-checkbox-base': 'fsc gap-1 inline-flex cursor-pointer',
        'o-checkbox': 'o-transition text-md rounded border fcc peer-checked-(bg-context b-context scale-full children-scale-full)',
        'o-checkbox-icon': 'o-transition scale-0 text-(white md)',
        'o-checkbox-md': 'w-4 h-4',
        'o-checkbox-lg': 'w-5 h-5',
        'o-checkbox-disabled': 'o-disabled',

        // alert
        'o-alert-base': 'pr p-3  fi rounded o-transition w-full of-hidden c-context shadow-context:50 o-solid border fi',
        'o-alert-light': 'o-light',
        'o-alert-content': 'flex flex-col justify-center w-full',
        'o-alert-header': 'fb items-center',
        'o-alert-title': 'flex-1 text-sm font-600',
        'o-alert-close': 'text-md cursor-pointer pa top-3 right-3 fcc',
        'o-alert-icon': 'fi pr-5',
        'o-alert-description': 'flex break-all items-center text-sm',

        // Badge
        'o-badge': 'pr inline-block align-middle',
        'o-badge-sup': 'bg-context text-xs min-w-4.5 h-4.5 leading-4.5 whitespace-nowrap fcc inline-flex rounded-full px-1 z-1',
        'o-badge-sup-fixed': 'pa top-0 right-0 translate-x-[calc(50%-1px)] translate-y-[calc(-50%+1px)]',
        'o-badge-sup-dot': '!min-w-auto !h-2 !w-2 rounded-full',

        // tag
        'o-tag-base': 'fcc gap-1 rounded inline-flex box-border !outline-none c-context o-solid  mx-1',
        'o-tag-is-closable': 'pr-7px',
        'o-tag-xs': 'px-1.5 h-5 text-xs',
        'o-tag-sm': 'px-2.5 h-6 text-sm',
        'o-tag-md': 'px-3 h-7 text-sm ',
        'o-tag-lg': 'px-4 h-8 text-md',
        'o-tag-plain': 'bg-context:20',
        'o-tag-light': 'c-context border !border-context:60 bg-context:12',
        'o-tag-disabled': 'o-disabled',
        'o-tag-rounded': 'rounded-full',
        'o-tag-close': 'ml-1.5 cursor-pointer c-context',
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
