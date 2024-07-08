import type { UserShortcuts } from 'unocss'
import type { SizeType } from '../types'

const Size: Record<SizeType, string> = {
  xs: 'w-10',
  sm: 'w-13',
  md: 'w-16',
  lg: 'w-20',
}

export const avatar: UserShortcuts = [
  [/^avatar(?:-size)?(?:-(.+))?$/, ([, s]) => s in Size ? Size[s] : undefined],
  ['avatar', `
      relative inline-flex avatar-md select-none
      [&>div]:(flex aspect-ratio-square of-hidden)
      [&_img]:(w-full h-full object-cover) o-theme-text
    `],
  ['avatar-group', `
      flex of-hidden
      [&_.avatar]:(of-hidden rounded-full border border-3px border-current)
    `],
  ['avatar-placeholder', `
      bg-theme-500 dark:bg-theme-600
      [&>div]:(flex items-center justify-center)
    `],
  [/^avatar-(online|offline)$/, ([, s]) => `before:(content-empty absolute top-7% right-7% z-10 block w-15% h-15% rounded-full o-theme-${s === 'online' ? '500' : '900'} o-theme-text bg-context ring ring-2px ring-current)`],
]
