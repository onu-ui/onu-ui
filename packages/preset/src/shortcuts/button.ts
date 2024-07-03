import type { UserShortcuts } from 'unocss'

export const Size = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base',
}

export const button: UserShortcuts = [
  ['btn-disabled-theme-color', 'disabled:(bg-transparent text-context) dark:disabled:(bg-transparent text-context)!'],
  [/^btn(?:-size)?-(.*)$/, ([, s]) => s in Size ? Size[s] : undefined],
  ['btn-hover', 'hover:o-theme-600'],
  //   ['btn-focus', 'focus:o-theme-700'],
  ['btn-active', 'active:scale-95 active:o-theme-700'],
  ['btn-disabled', `
        disabled:(
          cursor-not-allowed op-32 shadow-none
          hover:o-theme-DEFAULT
          active:scale-100
        )
        `],
  ['btn-default', `
        btn-md btn-hover btn-active btn-focus btn-disabled
        text-current bg-transparent
        inline-flex items-center justify-center gap-1 children:flex-shrink-0
        cursor-pointer rounded shadow-sm
        o-transition font-onu font-medium
        border-(~ current) of-hidden
        `],
  ['btn-text', `bg-transparent text-context dark:text-context shadow-none`],
  ['btn-link', `btn-text hover:(underline underline-offset-4)`],
  ['btn-ghost', `btn-text btn-disabled-theme-color bg-hover hover:bg-context hover:o-theme-color-text`],
  ['btn-ghost-light', `btn-text btn-disabled-theme-color hover:bg-theme-100 dark:hover:bg-theme-900`],
  ['btn-soft', `
        text-theme-600 bg-theme-100 hover:bg-theme-200
        dark:text-theme-400! dark:bg-theme-900 dark:hover:bg-theme-800
        disabled:hover:bg-theme-100
        disabled:hover:dark:bg-theme-900
        shadow-none
        `],
  ['btn-outline', `
        bg-transparent border-1
        text-context dark:text-context
        `],
  ['btn-outline-cover', `btn-outline hover:bg-theme-600 hover:o-theme-color-text`],
  ['btn-solid', `btn-outline`],
  ['btn-solid-cover', `btn-outline-cover btn-disabled-theme-color`],
  ['btn-dashed', `btn-outline border-dashed`],
  ['btn-dashed-cover', `btn-outline btn-disabled-theme-color hover:bg-theme-100 dark:hover:bg-theme-900 border-dashed`],
  ['btn', `
        btn-default border-0 border-context
        o-theme-500 bg-context
        disabled:op-64 o-theme-color-text
        `],
]
