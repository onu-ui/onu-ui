import { withInstallFunction } from '@onu-ui/utils'
import Message from './src/methods'

export const OMessage = withInstallFunction(Message, '$message')
export default OMessage

export * from './src/type'
