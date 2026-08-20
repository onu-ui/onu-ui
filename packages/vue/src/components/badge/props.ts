import type { ExtractPropTypes, PropType } from 'vue'
import { sizeable } from '@/composables/useProps'

export type BadgeVariant = 'default' | 'outline'
export type BadgePosition = 'tl' | 'tr' | 'bl' | 'br'

export const badgeProps = {
  size: sizeable,
  variant: {
    type: String as PropType<BadgeVariant>,
    default: 'default',
  },
  dot: Boolean,
  position: String as PropType<BadgePosition>,
  tag: {
    type: String,
    default: 'span',
  },
} as const

export type OBadgeProps = ExtractPropTypes<typeof badgeProps>
