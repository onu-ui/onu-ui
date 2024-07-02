import { spliteObject } from '../utils'

export const input: Record<string, string> = spliteObject({
  'input-xs': 'px-2.5 py-1.5 text-xs',
  'input-sm': 'px-2.5 py-1.5 text-sm',
  'input-md': 'px-3 py-2 text-sm',
  'input-lg': 'px-3.5 py-2.5 text-base',
  'input-focus': 'focus:(o-[hsl(var(--color-primary-DEFAULT))] ring-offset-(1 context) ring-context)',
  'input-hover': 'hover:o-[hsl(var(--color-primary-600))]',
  'input-disabled': `
          disabled:(
            cursor-not-allowed op-64 shadow-none
            hover:(o-[hsl(var(--color-gray-100))])
            bg-context:64 o-[hsl(var(--color-gray-100))]
          )
  `,
  'input-default': `
          input-md input-hover input-focus input-disabled
          ring-1 ring-[hsl(var(--color-gray-300))] dark:ring-[hsl(var(--color-gray-700))]
          bg-transparent placeholder-[hsl(var(--color-gray-400))] text-black dark:(text-white placeholder-[hsl(var(--color-gray-500))])
          outline-none shadow-sm rounded
        `,
  'input': `
          input-default
          o-[hsl(var(--color-primary-DEFAULT))]
          ring-context
          disabled:(o-[hsl(var(--color-primary-200))] hover:o-[hsl(var(--color-primary-200))])
        `,
  'input-none': 'ring-0 !bg-transparent',
})
