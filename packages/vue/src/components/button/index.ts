import { withInstall } from '../../utils'
import ButtonGroup from './group.vue'
import Button from './index.vue'

export const OButton = withInstall(Button)
export const OButtonGroup = withInstall(ButtonGroup)
export default OButton

export * from './props'
