import type { ExtractPropTypes, PropType } from 'vue'
import { sizeable } from '@/composables/useProps'

export type AvatarVariants = 'squircle' | 'hexagon' | 'triangle'

export const avatarProps = {
  size: sizeable,
  src: String,
  variant: { type: String as PropType<AvatarVariants> },
}

export type OAvatarProps = ExtractPropTypes<typeof avatarProps>
