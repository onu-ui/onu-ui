import { spliteObject } from '../utils'

export const input: Record<string, string> = spliteObject({
  'input-xs': 'px-2.5 py-1.5 text-xs',
  'input-sm': 'px-2.5 py-1.5 text-sm',
  'input-md': 'px-3 py-2 text-sm',
  'input-lg': 'px-3.5 py-2.5 text-base',
  'input-focus': 'focus:(o-theme-DEFAULT ring-offset-(1 context) ring-context)',
  'input-hover': 'hover:o-theme-600',
  'input-disabled': `
          disabled:(
            cursor-not-allowed op-64 shadow-none
            hover:(o-gray-100)
            bg-context:64 o-gray-100
          )
  `,
  'input-default': `
          input-md input-hover input-focus input-disabled
          ring-1 ring-color-gray-300 dark:ring-color-gray-700
          bg-transparent placeholder-gray-400 text-black dark:(text-white placeholder-gray-500)
          outline-none shadow-sm rounded
        `,
  'input': `
          input-default
          o-theme-DEFAULT
          ring-context
          disabled:o-theme-200 hover:o-theme-200
        `,
  'input-none': 'ring-0 !bg-transparent',
})
