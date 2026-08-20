import { withInstall } from '../../utils'
import AvatarGroup from './group.vue'
import Avatar from './index.vue'

export const OAvatar = withInstall(Avatar)
export const OAvatarGroup = withInstall(AvatarGroup)
export default OAvatar

export * from './props'
