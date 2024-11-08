import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'

const Size: Record<SizeType, [string, string]> = {
  xs: ['size-4', '60%'],
  sm: ['size-4.5', '60%'],
  md: ['size-5', '65%'],
  lg: ['size-5.5', '65%'],

}

export const radio: CustomShortcut[] = [
  [/^radio-(.+)$/, ([, s], { theme }) => {
    if (s in Size) {
      const _s = Size[s as SizeType]
      return [
        `child-input:(${_s[0]})`,
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
      radio-md radio-circle relative flex items-center o-dark dark:o-light
      checked:child-input:border-context:40
      disabled:child-input:(cursor-not-allowed op-50)
      child-input:(
        checked:border-context:30 cursor-pointer
        appearance-none border border-solid border-gray-300:50 o-transition
      )
    `,
  ],
  [
    'radio-dot',
    `
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      size-0 opacity-0 cursor-pointer
      peer-checked:(size-$radio-dot-size opacity-100)
      peer-disabled:(cursor-not-allowed op-50)
      bg-context o-transition
    `,
  ],
]
