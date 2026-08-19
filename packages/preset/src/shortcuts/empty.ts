import type { CustomShortcut } from '../types'

export const empty: CustomShortcut[] = [
  ['emptybox', `
    min-w-0 flex flex-1 flex-col items-center justify-center gap-6
    o-radius-lg border border-dashed border-border p-6 text-center text-balance
  `],
  ['emptybox-header', 'max-w-sm flex flex-col items-center gap-2 text-center'],
  ['emptybox-media', 'mb-2 flex shrink-0 items-center justify-center'],
  ['emptybox-media-icon', `
    size-10 o-radius-lg bg-muted text-foreground
    [&>i]:(size-5 pointer-events-none shrink-0)
  `],
  ['emptybox-title', 'text-lg font-medium tracking-tight'],
  ['emptybox-desc', 'text-sm leading-relaxed text-muted-foreground'],
  ['emptybox-content', 'w-full max-w-sm min-w-0 flex flex-col items-center gap-4 text-sm text-balance'],
]
