import type { CustomShortcut, SizeType } from '../types'
import { resolveRuleWithContext } from '../utils'
import { controlHeight } from './control-size'

const Size: Record<SizeType, string> = {
  xs: `${controlHeight.xs} pl-2 pr-7 text-xs`,
  sm: `${controlHeight.sm} pl-2.5 pr-8 text-sm`,
  md: `${controlHeight.md} pl-3 pr-9 text-sm`,
  lg: `${controlHeight.lg} pl-4 pr-10 text-sm`,
}

export const nativeSelects: CustomShortcut[] = [
  [/^select-native-(.+)$/, ([, value], { theme }) => value in Size ? Size[value as SizeType] : resolveRuleWithContext(value, theme, '--onu-color-context')],
  ['select-native-default', 'input-default select-native-md w-full cursor-pointer bg-[linear-gradient(45deg,transparent_50%,currentColor_50%),linear-gradient(135deg,currentColor_50%,transparent_50%)] bg-[position:calc(100%-13px)_50%,calc(100%-9px)_50%] bg-[size:4px_4px,4px_4px] bg-no-repeat'],
  ['select-native', 'select-native-default input-bordered input-focus o-theme-primary'],
]
