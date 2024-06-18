import type { UserShortcuts } from 'unocss'

const Size = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3.5 py-2.5 text-base',
}

export const button: UserShortcuts = [
  [/^btn(?:-size)?-(.*)$/, ([, s]) => s in Size ? Size[s] : undefined],
  ['btn-hover', 'hover:o-[rgb(var(--color-primary-600))]'],
  ['btn-focus', 'focus:o-[rgb(var(--color-primary-600))]'],
  ['btn-active', 'active:scale-95'],
  ['btn-disabled', `
        disabled:(
                cursor-not-allowed op-32 shadow-none
                hover:o-[rgb(var(--color-primary-DEFAULT))]
                active:scale-100
        )
        `],
  ['btn-default', `
          btn-md btn-hover btn-active btn-focus btn-disabled
          text-black dark:text-white bg-transparent
          inline-flex items-center justify-center gap-1 
          cursor-pointer rounded shadow-sm
          o-transition select-none
          ring-1 ring-current
        `],
  ['btn-soft', `
          bg-[rgb(var(--color-primary-100))] dark:bg-[rgb(var(--color-primary-900))]
          text-context dark:text-context shadow-none
          hover:(bg-context text-white) dark:hover:text-black
          `],
  ['btn-light', `
          bg-[rgb(var(--color-primary-100))] dark:bg-[rgb(var(--color-primary-900))]
          text-context dark:text-context shadow-none
          hover:(bg-context text-white) dark:hover:text-black
          `],
  ['btn-outline', `
          bg-transparent ring-1
          text-context dark:text-context
          hover:(bg-context text-white) dark:hover:text-black
          `],
  ['btn-link', `
          bg-transparent underline underline-offset-2 shadow-none 
          text-context dark:text-context
          `],
  ['btn-border', ''],
  ['btn-dashed', `
          btn-outline ring-0 relative hover:text-context dark:hover:text-context
          after:(content-empty absolute inset-0 b-(~ context dashed) rounded)
          hover:bg-[rgb(var(--color-primary-100))] hover:dark:bg-[rgb(var(--color-primary-900))]
          `],
  ['btn', `
          btn-default o-[rgb(var(--color-primary-DEFAULT))] 
          text-white dark:text-black bg-context ring-0 disabled:op-64
        `],
]
