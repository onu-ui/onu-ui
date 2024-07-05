import { spliteObject } from '../utils'

import type { SizeType } from '../types'

const Size: Record<SizeType, string> = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base',
}

const baseInputFocus = 'focus:(o-theme-DEFAULT ring-2px ring-context)'
const baseInputHover = 'hover:o-theme-600'
const baseInputDisabled = `
  disabled:(
    cursor-not-allowed op-64 shadow-none
    hover:(o-gray-100)
    bg-context:64 o-gray-100
  )
`

export const input = [
  [/^input(?:-size)?-(.*)$/, ([, s]) => s in Size ? `${Size[s]}` : undefined],
  ['input-bordered', `border-context`],
  ['input-dashed', `border-dashed border-context focus-within:ring-0`],

  // ['input-focus', `${baseInputFocus} ` + `[&_input]:(${baseInputFocus})`],
  ['input-focus', `focus-within:(o-theme-DEFAULT o-border-theme-900 ring-(1px context))`],
  ['input-hover', 'hover:border-theme-context'],
  ['input-disabled', `
          disabled:(
            cursor-not-allowed op-64 shadow-none
            hover:(o-gray-100)
            bg-context:64 o-gray-100
          )
  `],
  ['input-default', `
          input-md input-hover input-disabled appearance-none o-transition
          focus-within:(o-theme-DEFAULT border-theme-context)
          border border-transparent bg-transparent
          placeholder:color-gray-400
          outline-none rounded
          [&_input]:(bg-transparent outline-none)
        `],
  ['input', `
          input-default input-bordered input-focus
          placeholder:color-[hsl(var(--onu-color-300))] dark:placeholder:color-[hsl(var(--onu-color-700))]
          o-theme-600 dark:o-theme-400 text-context
        `],
  ['input-none', 'ring-0 !bg-transparent'],
]
