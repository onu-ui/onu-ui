import type { SizeType } from '../types'

const Size: Record<SizeType, string> = {
  xs: 'w-6 h-4 [offset::0.5rem]',
  sm: 'w-8 h-5 [offset::0.75rem]',
  md: 'w-12 h-6 [offset::1.5rem]',
  lg: 'w-14 h-7 [offset::1.75rem]',
}

export const switches = [
  [/^switch(?:-size)?-(.*)$/, ([, s]) => s in Size ? `${Size[s]}` : undefined],
  ['switch-disabled', `disabled:(cursor-not-allowed checked:op-50)`],
  ['switch', [`switch-md switch-disabled shrink-0 cursor-pointer appearance-none 
    rounded-full o-transition duration-200
    border border-color-current bg-current
    text-context text-op-32! o-theme-DEFAULT
    [tglbg::#fff] dark:[tglbg::#000]
    [tglhandleborder::[0_0]]
    [calcOffset::[calc(var(--offset)_*_-1)]]
    checked:([calcOffset::var(--offset)] text-op-100!)
    `, {
    'box-shadow': `var(--calcOffset) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset,var(--tglhandleborder)`,
  }]],
]
