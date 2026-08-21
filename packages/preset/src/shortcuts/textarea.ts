import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'min-h-12 px-2 py-1 text-xs',
  sm: 'min-h-14 px-2.5 py-1.5 text-sm',
  md: 'min-h-16 px-3 py-2 text-sm',
  lg: 'min-h-20 px-4 py-2.5 text-sm',
}

export const textareas: CustomShortcut[] = [
  [/^textarea-(.+)$/, ([, value], { theme }) => value in Size ? Size[value as SizeType] : resolveRuleWithContext(value, theme, '--onu-color-context')],
  ['textarea-default', 'input-default textarea-md block w-full resize-y'],
  ['textarea', 'textarea-default input-bordered input-focus input-placeholder o-theme-primary'],
]
