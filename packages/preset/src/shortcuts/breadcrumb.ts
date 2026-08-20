import type { CustomShortcut } from '../types'

export const breadcrumbs: CustomShortcut[] = [
  ['breadcrumb', 'flex flex-wrap items-center gap-2 text-sm text-muted-foreground'],
  ['breadcrumb-item', 'inline-flex items-center gap-2'],
  ['breadcrumb-link', 'o-transition hover:text-foreground focus-visible:(outline-none ring-2 ring-ring/50)'],
  ['breadcrumb-current', 'font-normal text-foreground'],
  ['breadcrumb-separator', 'select-none text-muted-foreground/70'],
]
