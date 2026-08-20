import type { CustomShortcut } from '../types'

export const typography: CustomShortcut[] = [
  ['typo-h1', 'scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl'],
  ['typo-h2', 'scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight text-foreground'],
  ['typo-h3', 'scroll-m-20 text-2xl font-semibold tracking-tight text-foreground'],
  ['typo-h4', 'scroll-m-20 text-xl font-semibold tracking-tight text-foreground'],
  ['typo-p', 'leading-7 text-foreground [&:not(:first-child)]:mt-6'],
  ['typo-lead', 'text-xl text-muted-foreground'],
  ['typo-large', 'text-lg font-semibold text-foreground'],
  ['typo-small', 'text-sm font-medium leading-none text-foreground'],
  ['typo-muted', 'text-sm text-muted-foreground'],
  ['typo-blockquote', 'mt-6 border-l-2 border-border pl-6 italic text-foreground'],
  ['typo-code', 'rounded bg-muted px-1.5 py-1 font-mono text-sm font-semibold'],
]
