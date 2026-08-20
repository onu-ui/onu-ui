import { withInstall } from '../../utils'
import DropdownMenu from './index.vue'

const ContextMenu = { ...DropdownMenu, name: 'OContextMenu' } as typeof DropdownMenu
const Menubar = { ...DropdownMenu, name: 'OMenubar' } as typeof DropdownMenu
const NavigationMenu = { ...DropdownMenu, name: 'ONavigationMenu' } as typeof DropdownMenu

export const ODropdownMenu = withInstall(DropdownMenu, { ContextMenu, Menubar, NavigationMenu })
export const OContextMenu = ContextMenu
export const OMenubar = Menubar
export const ONavigationMenu = NavigationMenu
export default ODropdownMenu
export type { MenuItem } from './types'
