import type { CustomShortcut } from '../types'

export const labels: CustomShortcut[] = [
  ['label', 'text-sm font-medium leading-none text-foreground peer-disabled:(cursor-not-allowed op-50)'],
  ['label-required', 'after:(content-["*"] ml-1 text-red-600)'],
]
