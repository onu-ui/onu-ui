import type { Variant } from 'unocss'
import type { Theme } from '@unocss/preset-uno'
export default [
  (input: string) => {
    const prefix = 'o-disabled:'
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: input => `[disabled] ${input}, ${input}[disabled]`,
      }
    }
  },
  (input: string) => {
    const prefix = 'o-checked:'
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: input => `[checked] ${input}, ${input}[checked]`,
      }
    }
  },
] as Variant<Theme>[]
