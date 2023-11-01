import { spliteObject } from '../utils'

export const buttonShortcuts: Record<string, string> = spliteObject({
  'btn-xs': 'px-2.5 py-1.5 text-xs',
  'btn-sm': 'px-2.5 py-1.5 text-sm',
  'btn-md': 'px-3 py-2 text-sm',
  'btn-lg': 'px-3.5 py-2.5 text-base',
  'btn-hover': 'hover-(o-[rgb(var(--color-primary-600))])',
  'btn-focus': 'focus-(o-[rgb(var(--color-primary-600))])',
  'btn-active': 'active-(scale-95)',
  'btn-disabled': `
          disabled:(cursor-not-allowed opacity-75 shadow-none) 
          hover:(o-[rgb(var(--color-primary-DEFAULT))])
          active-(scale-100) 
        `,
  'btn-default': `
          btn-md btn-hover btn-active btn-focus
          text-black dark-text-white bg-transparent
          inline-flex items-center justify-center gap-1 
          cursor-pointer rounded shadow-sm
          o-transition select-none
          ring-1 ring-current
        `,
  'btn-ghost': `
          bg-[rgb(var(--color-primary-100))] dark-bg-[rgb(var(--color-primary-900))]
          text-context dark-text-context shadow-none
          hover-(bg-context text-white) dark-hover-text-black
          `,
  'btn-outline': `
          bg-transparent ring-1
          text-context dark-text-context
          hover-(bg-context text-white) dark-hover-text-black
          `,
  'btn-link': `
          bg-transparent underline underline-offset-2 shadow-none 
          text-context dark-text-context
          `,
  'btn': `
          btn-default o-[rgb(var(--color-primary-DEFAULT))] 
          text-white dark-text-black bg-context ring-0
        `,
})
