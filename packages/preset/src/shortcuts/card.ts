import type { CustomShortcut } from '../types'

export const cards: CustomShortcut[] = [
  ['card', `border border-solid border-gray-300:40 dark:border-gray-700:40 o-round-xl of-hidden`],
  [`card-header`, `flex items-center justify-between p-6 gap-2`],
  [`card-title`, `text-lg font-semibold`],
  [`card-desc`, `text-sm text-gray-500`],
  ['card-close', `cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300`],
  [`card-body`, `p-6 pt-0`],
  [`card-footer`, `flex items-center justify-between p-6 pt-0 gap-2`],
]
