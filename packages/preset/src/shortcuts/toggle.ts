import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'h-7 px-2 text-xs',
  sm: 'h-8 px-2.5 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
}

export const toggles: CustomShortcut[] = [
  [/^toggle-(.+)$/, ([, value], { theme }) => value in Size ? Size[value as SizeType] : resolveRuleWithContext(value, theme, '--onu-color-context')],
  ['toggle-default', 'toggle-md inline-flex items-center justify-center gap-2 rounded-md font-medium o-transition hover:bg-muted focus-visible:(outline-none ring-3 ring-ring/50) disabled:(pointer-events-none op-50) aria-pressed:(bg-accent text-accent-foreground) data-[state=on]:(bg-accent text-accent-foreground)'],
  ['toggle', 'toggle-default o-theme-primary'],
  ['toggle-outline', 'toggle border border-border bg-transparent shadow-sm hover:bg-muted'],
]
