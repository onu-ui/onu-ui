import type { ExtractPropTypes, PropType } from 'vue'

export type SkeletonVariant = 'default' | 'text' | 'avatar'

export const skeletonProps = {
  variant: {
    type: String as PropType<SkeletonVariant>,
    default: 'default',
  },
} as const

export type OSkeletonProps = ExtractPropTypes<typeof skeletonProps>
