import type { CustomShortcut } from '../types'
import { resolveRuleWithContext } from '../utils'

export const progresses: CustomShortcut[] = [
  [/^progress-(.+)$/, ([, value], { theme }) => resolveRuleWithContext(value, theme, '--onu-color-context')],
  ['progress', 'h-2 w-full appearance-none overflow-hidden rounded-full border-0 bg-muted o-theme-primary [&::-webkit-progress-bar]:bg-muted [&::-webkit-progress-value]:bg-context [&::-moz-progress-bar]:bg-context'],
  ['progress-sm', 'h-1.5'],
  ['progress-lg', 'h-3'],
]
