import { withInstall } from '@onu-ui/utils'
import AvatarGroup from './group.vue'
import Avatar from './index.vue'

export const OAvatar = withInstall(Avatar)
export const OAvatarGroup = withInstall(AvatarGroup)

export * from './props'
