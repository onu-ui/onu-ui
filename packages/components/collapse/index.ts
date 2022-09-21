import { withInstall } from '@onu-ui/utils'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapseItem.vue'

export * from './src/props'

export const OCollapse = withInstall(Collapse)
export const OCollapseItem = withInstall(CollapseItem)

export default OCollapse
