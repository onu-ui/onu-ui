import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, string> = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base o-round-lg',
}

export const button: CustomShortcut[] = [
  [/^btn-(?:size-)?(.+)$/, ([, s], { theme }) => {
    if (s in Size)
      return Size[s as SizeType]
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  ['btn-disabled-theme-color', 'disabled:(bg-transparent text-context) dark:disabled:(bg-transparent text-context)!'],
  ['btn-hover', 'hover:o-theme-600'],
  //   ['btn-focus', 'focus:o-theme-700'],
  ['btn-active', 'active:o-theme-700'],
  ['btn-disabled', `
        disabled:(
          cursor-not-allowed op-32 shadow-none
          hover:o-theme-DEFAULT
        )
        `],
  ['btn-default', `
        btn-md btn-hover btn-active btn-disabled o-round-md
        text-current bg-transparent
        inline-flex items-center justify-center gap-1 children:flex-shrink-0
        cursor-pointer shadow-sm
        o-transition font-onu font-medium
        border-(~ current) of-hidden
        `],
  ['btn-text', `bg-transparent text-context dark:text-context shadow-none border-0`],
  ['btn-link', `btn-text p0 hover:(underline underline-offset-4)`],
  ['btn-ghost', `btn-text btn-disabled-theme-color hover:bg-context hover:o-theme-text`],
  ['btn-ghost-light', `btn-text btn-disabled-theme-color hover:bg-theme-100 dark:hover:bg-theme-900`],
  ['btn-soft', `
        text-theme-600 bg-theme-100 hover:bg-theme-200
        dark:text-theme-400! dark:bg-theme-900 dark:hover:bg-theme-800
        disabled:hover:bg-theme-100
        disabled:hover:dark:bg-theme-900
        shadow-none
        `],
  ['btn-outline', `
        bg-transparent border-1 border-solid
        text-context dark:text-context
        `],
  ['btn-outline-cover', `
        btn-outline hover:bg-context hover:border-context text-theme-500!
        hover:o-theme-200 dark:hover:o-theme-800
        active:o-theme-300 dark:active:o-theme-700
        `],
  ['btn-solid', `btn-outline`],
  ['btn-solid-cover', `btn-outline-cover btn-disabled-theme-color`],
  ['btn-dashed', `btn-outline border-dashed`],
  ['btn-dashed-cover', `btn-outline btn-disabled-theme-color hover:bg-theme-100 dark:hover:bg-theme-900 border-dashed`],
  ['btn', `
        btn-default border-0 border-context
        o-theme-500 bg-context
        disabled:op-64 o-theme-text
        `],

  // buttonn-group
  [/^btn-group(?:-(\w+))?$/, ([, s]) => {
    s ??= 'h'

    const base = `
    flex items-center justify-center
    [&>.btn-group-active]:(bg-theme-500 text-theme-100! dark:text-theme-900! hover:border-theme-500)
    `

    if (s === 'h') {
      return `
      ${base}
      [&>.btn]:(rounded-0 border-r-0)
      first:[&>.btn]:(rounded-l-md) 
      last:[&>.btn]:(rounded-r-md border-r-1)
    `
    }
    else if (s === 'v') {
      return `
      ${base} flex-col
      [&>.btn]:(rounded-0 border-b-0)
      first:[&>.btn]:(rounded-t-md)
      last:[&>.btn]:(rounded-b-md border-b-1)
    `
    }
  }],
]
