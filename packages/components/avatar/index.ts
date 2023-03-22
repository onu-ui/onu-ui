import { withInstall } from '@onu-ui/utils'
import Avatar from './src/index.vue'
import AvatarGroup from './src/group.vue'

export const OAvatar = withInstall(Avatar)
export const OAvatarGroup = withInstall(AvatarGroup)
export default OAvatar

export * from './src/props'
