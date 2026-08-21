import DropdownMenuComponent from './index.vue'

const ContextMenu = { ...DropdownMenuComponent, name: 'ContextMenu' } as typeof DropdownMenuComponent
const Menubar = { ...DropdownMenuComponent, name: 'Menubar' } as typeof DropdownMenuComponent
const NavigationMenu = { ...DropdownMenuComponent, name: 'NavigationMenu' } as typeof DropdownMenuComponent

export const DropdownMenu = DropdownMenuComponent
export { ContextMenu, Menubar, NavigationMenu }
export default DropdownMenu
export type { MenuItem } from './types'
