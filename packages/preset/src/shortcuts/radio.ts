import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, [string, string]> = {
  xs: ['size-3', '60%'],
  sm: ['size-3.5', '60%'],
  md: ['size-4', '65%'],
  lg: ['size-4.5', '65%'],

}

export const radio: CustomShortcut[] = [
  [/^radio-(.+)$/, ([, s], { theme }) => {
    if (s in Size) {
      const _s = Size[s as SizeType]
      return [
        `important:child-input:(${_s[0]})`,
        {
          '--radio-dot-size': _s[1],
        },
      ]
    }
    return resolveRuleWithContext(s, theme, '--onu-color-context')
  }],
  [/^radio-(square|circle)$/, ([,s]) => {
    if (s === 'square') {
      return ['child-input:rounded-4px', '[&>.radio-dot]:rounded-2px']
    }
    else if (s === 'circle') {
      return ['child-input:rounded-full', '[&>.radio-dot]:rounded-full']
    }
  }],
  [
    'radio',
    `
      radio-md radio-circle relative flex items-center shrink-0 h-fit o-theme-primary
      has-[>input:focus-visible]:(outline-none border-ring ring-3px ring-ring/50)
      has-[>input:disabled]:(pointer-events-none cursor-not-allowed op-50)
      checked:child-input:border-context:40
      child-input:(
        checked:border-context:30 cursor-pointer
        appearance-none border border-solid border-input o-transition
      )
    `,
  ],
  [
    'radio-dot',
    `
      pos-center size-0 opacity-0 cursor-pointer
      peer-checked:(size-$radio-dot-size opacity-100)
      peer-disabled:cursor-not-allowed
      bg-context o-transition
    `,
  ],
]
