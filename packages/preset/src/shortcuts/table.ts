import type { CustomShortcut } from '../types'

export const tables: CustomShortcut[] = [
  ['table-wrap', 'w-full overflow-x-auto rounded-lg border border-border'],
  ['table', 'w-full border-collapse text-sm'],
  ['table-head', 'bg-muted/60 text-muted-foreground'],
  ['table-row', 'border-b border-border o-transition last:border-b-0 hover:bg-muted/35 data-[state=selected]:bg-muted'],
  ['table-th', 'h-11 px-4 text-left align-middle font-medium'],
  ['table-td', 'px-4 py-3 align-middle'],
  ['table-caption', 'mt-3 text-sm text-muted-foreground'],
]
