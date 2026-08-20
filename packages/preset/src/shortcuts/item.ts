import type { CustomShortcut } from '../types'

export const items: CustomShortcut[] = [
  ['item', 'flex items-center gap-4 rounded-lg border border-border bg-card p-4 text-card-foreground o-transition'],
  ['item-interactive', 'item cursor-pointer hover:bg-muted focus-visible:(outline-none ring-3 ring-ring/50)'],
  ['item-media', 'flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground'],
  ['item-content', 'min-w-0 flex-1'],
  ['item-title', 'font-medium leading-none'],
  ['item-description', 'mt-1.5 text-sm text-muted-foreground'],
  ['item-actions', 'ml-auto flex shrink-0 items-center gap-2'],
]
