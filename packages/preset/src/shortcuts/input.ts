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
  ['input-placeholder', `placeholder:color-[hsl(var(--onu-color-300))] dark:placeholder:color-[hsl(var(--onu-color-700))]`],

  ['input-focus', [`focus-within:(ring-(1px context))`, {
    // TODO: UnoCSS feature, use yield to generate the value into `focus-within` variant.
    '--un-ring-color': 'hsl(var(--onu-color-border, var(--onu-color-context)) / var(--un-ring-opacity, 1)) !important',
  }]],
  ['input-hover', 'hover:(border-op-100)'],
  ['input-disabled', `
          disabled:(
            cursor-not-allowed border-op-0!
            bg-gray-100:80 text-gray-300
            dark:(bg-gray-900:32 text-gray-700)
          )

          has-[>input[disabled]]:(
            cursor-not-allowed
            border-op-0!
            bg-gray-100:80 text-gray-300
            dark:(bg-gray-900:32 text-gray-700)
          )

          [&>input]:has-[>input[disabled]]:cursor-not-allowed
  `],
  ['input-default', `
          font-onu input-md input-hover appearance-none
          input-disabled
          border border-solid border-theme-context border-op-0
          bg-transparent
          outline-none o-round-md
          placeholder:color-gray-300
          focus-within:(border-op-100)
          [&_input]:(bg-transparent outline-none)
          o-dark dark:o-light
        `],
  ['input', `
          input-default input-bordered input-focus
          input-placeholder [&_input]:input-placeholder
          text-context
          o-theme-400 dark:o-theme-600
        `],
]
