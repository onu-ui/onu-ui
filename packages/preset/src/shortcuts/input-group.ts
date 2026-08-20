import type { CustomShortcut } from '../types'

export const inputGroups: CustomShortcut[] = [
  ['input-group', 'input-default input-bordered input-focus flex w-full items-center gap-2 px-3 [&>input]:(min-w-0 flex-1 border-0 bg-transparent p-0 outline-none ring-0)'],
  ['input-group-addon', 'shrink-0 text-sm text-muted-foreground'],
  ['input-group-button', 'shrink-0 rounded-sm p-1 text-muted-foreground hover:(bg-muted text-foreground) focus-visible:(outline-none ring-2 ring-ring/50)'],
]
