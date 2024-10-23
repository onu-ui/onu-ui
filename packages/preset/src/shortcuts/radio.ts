import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'w-10',
  sm: 'w-13',
  md: 'w-4 h-4',
  lg: 'w-20',
}

export const radio: CustomShortcut[] = [
  [/^radio-(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['radio', `
    relative flex items-center gap-1 cursor-pointer
    child-input:(
      radio-md checked:border-context:30
      appearance-none rounded-full border border-gray-300:50 o-transition
    )
    child-non-input:(
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      size-0 opacity-0
      peer-checked:(size-60% opacity-100)
      bg-context o-transition
    )
  `],
]
