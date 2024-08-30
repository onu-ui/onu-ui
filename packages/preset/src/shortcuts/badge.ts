import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'px-5px text-10px h-12px',
  sm: 'px-6.5px text-12px h-15px',
  md: 'px-8px text-14px h-18px',
  lg: 'px-10px text-16px h-22px',
}

export const badge: CustomShortcut[] = [
  [/^badge-(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['badge-default', `
      font-onu inline-flex items-center justify-center gap-2 o-transition w-fit
      badge-md rounded-full 
      border border-color-gray-200 dark:border-color-gray-600 text-gray-400
    `],
  ['badge', `badge-default o-theme-DEFAULT border-color-context dark:border-color-context bg-context o-theme-text`],
]
