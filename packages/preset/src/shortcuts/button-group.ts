import type { UserShortcuts } from 'unocss'
import { Size } from './button'

export const buttonGroup: UserShortcuts = [
  [/^btn-group(?:-(\w+))?$/, ([s]) => {
    const size = s ?? 'md'
    if (!(size in Size))
      return

    const tokens = Size[size]

    return `
        flex items-center justify-center gap-2px
        [&>.btn]:(rounded-0 bg-[hsl(var(--color-gray-300))])
        dark:[&>.btn]:(bg-[hsl(var(--color-gray-700))])
        first:[&>.btn]:(rounded-l-md) last:[&>.btn]:(rounded-r-md)
        [&>.btn-group-active]:(bg-[hsl(var(--onu-color-500))] o-theme-color-text)!
    `
  }],

  // 'btn': 'not-last:border-r-0',
]
