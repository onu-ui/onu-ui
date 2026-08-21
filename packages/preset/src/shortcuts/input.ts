import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base',
}

export const input: CustomShortcut[] = [
  [/^input-(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['input-bordered', `border-op-100`],
  ['input-dashed', `border-dashed border-op-100 focus-within:ring-0`],
  ['input-placeholder', `placeholder:text-muted-foreground`],

  ['input-focus', `focus-within:(border-ring ring-3px ring-ring/50)`],
  ['input-hover', 'hover:(border-op-100)'],
  ['input-disabled', `
          disabled:(
            pointer-events-none cursor-not-allowed op-50
            bg-muted text-muted-foreground
          )

          has-[>input[disabled]]:(
            cursor-not-allowed
            pointer-events-none op-50
            bg-muted text-muted-foreground
          )

          [&>input]:has-[>input[disabled]]:cursor-not-allowed
  `],
  ['input-default', `
          font-onu input-md input-hover appearance-none
          input-disabled
          border border-solid border-theme-context:0
          bg-background text-foreground
          outline-none o-radius-md
          placeholder:text-muted-foreground
          focus-within:(border-op-100)
          [&_input]:(bg-transparent outline-none)
          flex items-center gap-2
        `],
  ['input', `
          input-default input-focus input-bordered
          input-placeholder [&_input]:input-placeholder
          text-foreground
          o-theme-primary
        `],
]
