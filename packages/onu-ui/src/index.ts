import installer from './defaults'

export * from './resolver'
export * from '@onu-ui/components'
export * from '@onu-ui/preset'
export * from '@onu-ui/utils'

export const install = installer.install
export const version = installer.version

export default installer
