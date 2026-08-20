import installer from './defaults'

export * from './components'
export type { SizeType } from './composables/useProps'
export type { OnuOptions } from './plugin'

export const install = installer.install
export const version = installer.version

export default installer
