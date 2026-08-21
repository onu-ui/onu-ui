import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'w-5',
  sm: 'w-6',
  md: 'w-8',
  lg: 'w-10',
}

export const avatar: CustomShortcut[] = [
  [/^avatar-(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['avatar', `
      relative inline-flex avatar-md select-none
      [&>div]:(flex aspect-ratio-square of-hidden)
      [&_img]:(w-full h-full object-cover) o-theme-text
    `],
  [/^avatar-group-(.+)$/, ([, s]) => `
      [&_.avatar]:(${Size[s as SizeType]})
    `],
  ['avatar-group', `
      flex of-hidden
      [&_.avatar]:(of-hidden rounded-full border border-3px border-background)
    `],
  ['avatar-placeholder', `
      [&>div]:(flex items-center justify-center bg-primary text-primary-foreground)
    `],
  [/^avatar-(online|offline)$/, ([, s]) => `before:(content-empty absolute top-7% right-7% z-10 block w-15% h-15% rounded-full o-theme-${s === 'online' ? '500' : '900'} o-theme-text bg-context ring ring-2px ring-current)`],
]
