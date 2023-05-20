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
  (input: string) => {
    const prefix = 'o-after:'
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: s => `${s}::after`,
      }
    }
  },
  (input: string) => {
    const prefix = 'o-before:'
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: s => `${s}::before`,
      }
    }
  },
  // o-children:[.o-button]:bg-red => .o-children\:\[.o-button\]\:bg-red > .o-button { bg-red }
  (input: string) => {
    const prefix = 'o-children:'
    const reg = /(o-children:)\[(.*)\]:(.*)$/
    if (input.startsWith(prefix)) {
      return {
        matcher: input.replace(reg, '$3'),
        selector: s => `${s} > ${input.replace(reg, '$2')}`,
      }
    }
  },
  (input: string) => {
    const prefix = 'o-sibling:'
    const reg = /(o-sibling:)\[(.*)\]:(.*)$/
    if (input.startsWith(prefix)) {
      return {
        matcher: input.replace(reg, '$3'),
        selector: s => `${s} + ${input.replace(reg, '$2')}`,
      }
    }
  },
] as Variant<Theme>[]
