import type { UserShortcuts } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import type { SizeType } from '../types'

const Size: Record<SizeType, string> = {
  xs: 'px-5px text-10px h-12px',
  sm: 'px-6.5px text-12px h-15px',
  md: 'px-8px text-14px h-18px',
  lg: 'px-10px text-16px h-22px',
}

export const badge: UserShortcuts<Theme> = [
  [/^badge(?:-size)?(?:-(.+))?$/, ([, s]) => {
    if (s in Size)
      return Size[s as SizeType]
  }],
  ['badge-default', `
      font-onu inline-flex items-center justify-center gap-2 o-transition w-fit
      badge-md rounded-full 
      border border-color-gray-200 dark:border-color-gray-600 text-gray-400
    `],
  ['badge', `badge-default o-theme-DEFAULT border-color-context dark:border-color-context bg-context o-theme-text`],
]
