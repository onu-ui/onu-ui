import type { ExtractPropTypes, PropType } from 'vue'
import { sizeable } from '@/composables/useProps'

export type AvatarVariants = 'squircle' | 'hexagon' | 'triangle'

export const avatarProps = {
  size: sizeable,
  src: String,
  variant: { type: String as PropType<AvatarVariants> },
  online: Boolean,
  offline: Boolean,
  /**
   * This props based on the UnoCSS.
   */
  w: String,
}

export const avatarGroupProps = {
  'size': sizeable,
  'vertical': Boolean,
  /**
   * This props based on the UnoCSS.
   */
  'space-x': {
    type: String,
    default: '-6',
  },
  'space-y': {
    type: String,
    default: '-6',
  },
}

export type OAvatarProps = ExtractPropTypes<typeof avatarProps>
export type OAvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
