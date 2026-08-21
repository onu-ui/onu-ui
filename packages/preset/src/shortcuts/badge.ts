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

    const context = resolveRuleWithContext(s, theme, '--onu-color-context')
    if (context) {
      return [
        ...context,
        'border-context/25! bg-context/10! text-context! [a&]:hover:bg-context/15!',
      ]
    }
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
      font-onu inline-flex w-fit shrink-0 items-center justify-center gap-1 of-hidden
      badge-size-md whitespace-nowrap rounded-full border border-transparent font-medium
      o-transition focus-visible:(outline-none border-ring ring-3px ring-ring/50)
      [&[aria-invalid=true]]:(border-destructive ring-3px ring-destructive/20)
      dark:[&[aria-invalid=true]]:ring-destructive/40
      [&>[data-icon]]:(pointer-events-none shrink-0)
      [&>svg]:(pointer-events-none size-3 shrink-0)
      o-theme-primary bg-context text-primary-foreground
      [a&]:hover:(bg-op-90 border-op-90)
    `],
  ['badge', 'badge-default'],
  ['badge-secondary', `
      border-transparent! bg-secondary! text-secondary-foreground!
      [a&]:hover:bg-secondary/90!
    `],
  ['badge-destructive', `
      border-transparent! bg-destructive! text-destructive-foreground!
      focus-visible:(border-destructive! ring-destructive/20!)
      dark:focus-visible:ring-destructive/40!
      [a&]:hover:bg-destructive/90!
    `],
  ['badge-outline', `
      border-border! bg-transparent! text-foreground!
      [a&]:hover:(bg-accent! text-accent-foreground!)
    `],
  ['badge-ghost', `
      border-transparent! bg-transparent! text-foreground!
      [a&]:hover:(bg-accent! text-accent-foreground!)
    `],
  ['badge-link', `
      border-transparent! bg-transparent! text-context! underline-offset-4
      [a&]:hover:underline
    `],
  ['badge-dot', 'size-1.5 p-0! border-0!'],
]
