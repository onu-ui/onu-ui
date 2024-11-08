import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, number> = {
  xs: 4.5,
  sm: 5.25,
  md: 6,
  lg: 6.5,
}

export const switches: CustomShortcut[] = [
  [/^switch-(?:size-)?(.+)$/, ([, s], { theme }) => {
    if (s in Size) {
      const h = Size[s as SizeType]
      const w = h * 2 - 1
      const dotSize = h - 1
      return [`w-${w}`, `h-${h}`, { '--dot-size': `${dotSize / 4}rem` }]
    }
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['switch', `
    switch-md inline-flex items-center cursor-pointer o-transition
    border-(~ 2 transparent solid) rd-full
    bg-gray-300 dark:bg-gray-700
    [&>input]:(size-0 op-0) 
    has-[>input:checked]:bg-context o-theme-400 dark:o-theme-500
    `],
  ['switch-dot', `
    bg-light dark:bg-dark rd-full o-transition aspect-square pointer-events-none
    h-$dot-size peer-checked:translate-x-$dot-size
    `],
  ['switch-default', `o-theme-dark dark:o-theme-light`],
]
