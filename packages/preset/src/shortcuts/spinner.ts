import type { CustomShortcut, SizeType } from '../types'

const Size: Record<SizeType, string> = {
  xs: 'size-3 border-1.5',
  sm: 'size-4 border-2',
  md: 'size-5 border-2',
  lg: 'size-6 border-3',
}

export const spinners: CustomShortcut[] = [
  [/^spinner-(?:size-)?(xs|sm|md|lg)$/, ([, size]) => Size[size as SizeType]],
  ['spinner-default', `
    inline-block shrink-0 animate-spin motion-reduce:animate-none rounded-full
    border-solid border-current border-r-transparent
  `],
  ['spinner', 'spinner-default spinner-sm'],
  ['spinner-primary', 'text-primary'],
  ['spinner-muted', 'text-muted-foreground'],
]
