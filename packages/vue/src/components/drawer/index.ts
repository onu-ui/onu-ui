import { withInstall } from '../../utils'
import Drawer from './index.vue'

const Sheet = { ...Drawer, name: 'OSheet' } as typeof Drawer

export const ODrawer = withInstall(Drawer, { Sheet })
export const OSheet = Sheet
export default ODrawer
