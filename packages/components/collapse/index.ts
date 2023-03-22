import { withInstall } from '@onu-ui/utils'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapseItem.vue'

export const OCollapse = withInstall(Collapse)
export const OCollapseItem = withInstall(CollapseItem)

export default OCollapse

export * from './src/props'
