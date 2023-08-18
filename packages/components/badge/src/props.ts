import type { ExtractPublicPropTypes, PropType } from 'vue'

export const badgeProps = {
  max: {
    type: Number,
    default: 99,
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  showZero: {
    type: Boolean,
    default: false,
  },
  dot: {
    type: Boolean,
    default: false,
  },
}

export type OBadgeProps = ExtractPublicPropTypes<typeof badgeProps>
