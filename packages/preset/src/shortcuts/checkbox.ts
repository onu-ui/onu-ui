import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'size-4',
  sm: 'size-4.5',
  md: 'size-5',
  lg: 'size-5.5',
}

export const checkboxs: CustomShortcut[] = [
  [/^checkbox-(?:size-)?(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['checkbox-default', `
      o-radius-sm cursor-pointer border-(1 solid context) 
      relative of-hidden o-transition bg-transparent
      child-input:hidden children:select-none
      has-[>input:checked]:bg-context
      has-[>input:disabled]:(op-72 cursor-not-allowed)
    `],
  ['checkbox', `checkbox-default checkbox-md`],
  ['checkbox-dot', `
      pos-center flex items-center justify-center of-hidden
      size-0 op-0 o-transition
      peer-checked:(size-full op-100)
    `],
]
