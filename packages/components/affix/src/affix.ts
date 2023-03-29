import type { ExtractPropTypes } from 'vue'
import { isBoolean, isNumber } from './../../../utils/shared/is'

export const affixProps = {
  zIndex: {
    type: Number,
    default: 100,
  },
  target: {
    type: String,
    default: '',
  },
  offset: {
    type: Number,
    default: 0,
  },
  position: {
    type: String,
    values: ['top', 'bottom'],
    default: 'top',
  },
} as const

export type OAffixProps = ExtractPropTypes<typeof affixProps>

export const affixEmits = {
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) => isNumber(scrollTop) && isBoolean(fixed),
  change: (fixed: boolean) => isBoolean(fixed),
}
export type OAffixEmits = typeof affixEmits
