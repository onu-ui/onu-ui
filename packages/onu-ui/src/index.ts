import installer from './defaults'

export * from './resolver'
export * from '../../components'
export * from '../../preset/src'
export * from '../../utils'

export const install = installer.install
export const version = installer.version

export default installer
