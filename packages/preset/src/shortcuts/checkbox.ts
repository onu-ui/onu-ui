import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'size-3',
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-4.5',
}

export const checkboxs: CustomShortcut[] = [
  [/^checkbox-(?:size-)?(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['checkbox-default', `
      o-radius-sm cursor-pointer border-(1 solid context) shrink-0
      relative of-hidden o-transition bg-transparent

      has-[>input:focus-visible]:(outline-none border-ring ring-3px ring-ring/50)
      child-input:(absolute inset-0 size-full op-0 cursor-pointer) children:select-none
      has-[>input:checked]:bg-context!
      has-[>input:disabled]:(pointer-events-none op-50 cursor-not-allowed)
    `],
  ['checkbox', `checkbox-default checkbox-md o-theme-primary`],
  ['checkbox-dot', `
      pos-center flex items-center justify-center of-hidden o-theme-text
      size-0 op-0 o-transition
      peer-checked:(size-full op-100)
    `],
]
