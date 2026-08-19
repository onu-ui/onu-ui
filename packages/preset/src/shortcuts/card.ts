import type { CustomShortcut } from '../types'

export const cards: CustomShortcut[] = [
  ['card', `bg-card text-card-foreground border border-solid border-border o-radius-xl of-hidden shadow-sm`],
  [`card-header`, `flex items-center justify-between p-6 gap-2`],
  [`card-title`, `text-lg font-semibold`],
  [`card-desc`, `text-sm text-muted-foreground`],
  ['card-close', `cursor-pointer text-muted-foreground hover:text-foreground o-transition`],
  [`card-body`, `p-6 pt-0`],
  [`card-footer`, `flex items-center justify-between p-6 pt-0 gap-2`],
]
