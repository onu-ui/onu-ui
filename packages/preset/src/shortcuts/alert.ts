import type { CustomShortcut } from '../types'
import { resolveRuleWithContext } from '../utils'

export const alerts: CustomShortcut[] = [
  [/^alert-(.+)$/, ([, color], { theme }) => resolveRuleWithContext(color, theme, '--onu-color-context')],
  ['alert-default', `
    relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5
    o-radius-lg border border-solid border-border bg-card px-4 py-3
    text-sm text-card-foreground o-theme-500
    has-[>i]:grid-cols-[1rem_1fr] has-[>i]:gap-x-3
    [&>i]:(size-4 translate-y-0.5 text-current)
  `],
  ['alert', 'alert-default'],
  ['alert-title', 'col-start-2 min-h-4 font-medium tracking-tight'],
  ['alert-desc', 'col-start-2 text-sm leading-relaxed text-muted-foreground'],
  ['alert-soft', `
    border-context/25 bg-context/10 text-context
    [&>.alert-desc]:text-context/80
  `],
  ['alert-destructive', `
    border-destructive/35 bg-card text-destructive
    [&>.alert-desc]:text-destructive/80
  `],
]
