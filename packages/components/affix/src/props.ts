import type { ExtractPublicPropTypes } from 'vue'
import { isBoolean, isNumber } from '@onu-ui/utils'

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

export const affixEmits = {
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) => isNumber(scrollTop) && isBoolean(fixed),
  change: (fixed: boolean) => isBoolean(fixed),
}

export type OAffixProps = ExtractPublicPropTypes<typeof affixProps>
export type OAffixEmits = typeof affixEmits
