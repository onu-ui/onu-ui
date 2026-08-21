import DrawerComponent from './index.vue'

const Sheet = { ...DrawerComponent, name: 'Sheet' } as typeof DrawerComponent

export const Drawer = DrawerComponent
export { Sheet }
export default Drawer
