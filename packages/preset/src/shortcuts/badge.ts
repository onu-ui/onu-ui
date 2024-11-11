import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'px-5px text-2xs h-12px',
  sm: 'px-6.5px text-xs h-15px',
  md: 'px-8px text-xs h-18px',
  lg: 'px-10px text-sm h-22px',
}

export const badge: CustomShortcut[] = [
  [/^badge-(?:size-)?(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  // top left, top right, bottom left, bottom right
  [/^badge-pos(?:-(tl|tr|bl|br))?$/, ([, p]) => {
    const pos = {
      tl: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
      tr: 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
      bl: 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
      br: 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
    }
    return `absolute transform ${pos[(p ?? 'tr') as keyof typeof pos]}`
  }],
  ['badge-default', `
      font-onu inline-flex items-center justify-center o-transition w-fit rounded-full
      badge-size-md 
      border-(~ solid context) bg-context hover:(bg-context:80 border-context:80)
      o-theme-dark dark:o-theme-light
      text-light dark:text-dark
    `],
  ['badge', `badge-default o-theme-400 dark:o-theme-500`],
  ['badge-outline', `!bg-transparent text-context dark:text-context`],
  ['badge-dot', 'px-2px! h-6px!'],
]
