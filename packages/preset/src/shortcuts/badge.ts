import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'h-4 px-1 text-[10px]',
  sm: 'h-4.5 px-1.5 text-xs',
  md: 'h-5 px-2 text-xs',
  lg: 'h-6 px-2.5 text-sm',
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
      border-(~ solid context) bg-context hover:(bg-op-80 border-op-80)
      o-theme-primary
      text-primary-foreground
    `],
  ['badge', `badge-default`],
  ['badge-outline', `!bg-transparent text-context dark:text-context`],
  ['badge-dot', 'px-2px! h-6px!'],
]
