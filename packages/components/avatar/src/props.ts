import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType } from '../../types'

export const avatarProps = {
  src: String,
  size: {
    type: String as PropType<SizeType>,
    default: 'md',
  },
  mode: {
    type: String as PropType<'bg' | 'img'>,
    default: 'bg',
  },
}

export const avatarGroupProps = {
  size: {
    type: String as PropType<SizeType>,
    default: 'md',
  },
}

export type OAvatarProps = ExtractPropTypes<typeof avatarProps>

export type OAvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
