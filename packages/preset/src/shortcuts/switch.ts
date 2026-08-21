import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, number> = {
  xs: 3,
  sm: 3.5,
  md: 4.5,
  lg: 5.5,
}

export const switches: CustomShortcut[] = [
  [/^switch-(?:size-)?(.+)$/, ([, s], { theme }) => {
    if (s in Size) {
      const h = Size[s as SizeType]
      const w = h * 2 - 1
      const dotSize = h - 0.5
      return [`w-${w}`, `h-${h}`, { '--dot-size': `${dotSize / 4}rem` }]
    }
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['switch', `
    switch-md relative inline-flex items-center cursor-pointer o-transition shrink-0
    p-1px rd-full
    bg-input has-[>input:focus-visible]:(outline-none border-ring ring-3px ring-ring/50)
    [&>input]:(absolute inset-0 size-full op-0 cursor-pointer)
    has-[>input:checked]:bg-context!
    has-[>input:disabled]:(pointer-events-none cursor-not-allowed op-50)
    `],
  ['switch-dot', `
    bg-background
    flex items-center justify-center select-none of-hidden rd-full h-$dot-size aspect-square
    o-transition pointer-events-none
    peer-checked:translate-x-[calc(var(--dot-size)-2px)]
    `],
  ['switch-default', `o-theme-primary`],
]
