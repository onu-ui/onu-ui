import type { UserShortcuts } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import type { SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base',
}

export const input: UserShortcuts<Theme> = [
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
            cursor-not-allowed op-64 shadow-none
            hover:(o-gray-100)
            bg-context:64 o-gray-100
          )
  `],
  ['input-default', `
          font-onu input-md input-hover input-disabled appearance-none
          border border-solid border-theme-context border-op-0 o-border-theme-400 dark:o-border-theme-600
          bg-transparent
          text-context
          outline-none rounded
          placeholder:color-gray-400
          focus-within:(border-op-100)
          [&_input]:(bg-transparent outline-none)
        `],
  ['input', `
          input-default input-bordered input-focus
          input-placeholder [&_input]:input-placeholder
          text-context o-theme-600 dark:o-theme-400
        `],
]
