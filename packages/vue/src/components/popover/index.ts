import { withInstall } from '../../utils'
import Popover from './index.vue'

const HoverCard = { ...Popover, name: 'OHoverCard' } as typeof Popover

export const OPopover = withInstall(Popover, { HoverCard })
export const OHoverCard = HoverCard
export default OPopover
