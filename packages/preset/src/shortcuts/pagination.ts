import type { CustomShortcut, SizeType } from '../types'

const Size: Record<SizeType, string> = {
  xs: 'size-7 text-xs',
  sm: 'size-8 text-sm',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
}

export const paginations: CustomShortcut[] = [
  ['pagination', 'flex items-center justify-center gap-1'],
  [/^pagination-item-(xs|sm|md|lg)$/, ([, size]) => Size[size as SizeType]],
  ['pagination-item', 'pagination-item-md inline-flex items-center justify-center rounded-md border border-transparent font-medium o-transition hover:bg-muted focus-visible:(outline-none ring-3 ring-ring/50) disabled:(pointer-events-none op-50)'],
  ['pagination-active', 'border-border bg-background shadow-sm'],
  ['pagination-ellipsis', 'pagination-item pointer-events-none text-muted-foreground'],
]
