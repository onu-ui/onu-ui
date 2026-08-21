import PopoverComponent from './index.vue'

const HoverCard = { ...PopoverComponent, name: 'HoverCard' } as typeof PopoverComponent

export const Popover = PopoverComponent
export { HoverCard }
export default Popover
