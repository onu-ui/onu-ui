import type { CustomShortcut, SizeType } from '../types'

const Size: Record<SizeType, string> = {
  xs: 'h-4 min-w-4 px-0.75 text-[10px]',
  sm: 'h-5 min-w-5 px-1 text-xs',
  md: 'h-6 min-w-6 px-1.5 text-xs',
  lg: 'h-7 min-w-7 px-2 text-sm',
}

export const kbd: CustomShortcut[] = [
  [/^kbd-(?:size-)?(xs|sm|md|lg)$/, ([, size]) => Size[size as SizeType]],
  ['kbd-default', `
    pointer-events-none inline-flex w-fit items-center justify-center gap-1
    select-none o-radius-sm bg-muted font-onu font-medium text-muted-foreground
    [&>i]:(size-3 shrink-0)
  `],
  ['kbd', 'kbd-default kbd-sm'],
  ['kbd-outline', 'border border-solid border-border bg-background shadow-xs'],
  ['kbd-group', 'inline-flex items-center gap-1'],
]
