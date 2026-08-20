import type { CustomShortcut } from '../types'

export const fields: CustomShortcut[] = [
  ['field', 'flex flex-col gap-2'],
  ['field-group', 'grid gap-5'],
  ['field-row', 'flex items-start gap-4 [&>.field]:(flex-1)'],
  ['field-description', 'text-sm leading-relaxed text-muted-foreground'],
  ['field-error', 'text-sm font-medium text-red-600 dark:text-red-400'],
]
