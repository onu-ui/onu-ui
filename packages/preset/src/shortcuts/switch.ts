import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, number> = {
  xs: 4.5,
  sm: 5.25,
  md: 6,
  lg: 6.75,
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
    switch-md inline-flex items-center cursor-pointer o-transition shrink-0
    border-(~ 2 transparent solid) rd-full
    bg-muted has-[>input:focus-visible]:(outline-none ring-2 ring-ring ring-offset-2 ring-offset-background)
    [&>input]:(size-0 op-0)
    has-[>input:checked]:bg-context
    has-[>input:disabled]:(cursor-not-allowed op-72)
    `],
  ['switch-dot', `
    bg-background
    flex items-center justify-center select-none of-hidden rd-full h-$dot-size aspect-square
    o-transition pointer-events-none
    peer-checked:translate-x-$dot-size
    `],
  ['switch-default', `o-theme-dark dark:o-theme-light`],
]
