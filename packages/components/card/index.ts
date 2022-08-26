import { withInstall } from '@onu-ui/utils'
import Card from './src/index.vue'
import type { ICardProps } from './src/type'

export const OCard = withInstall(Card)
export type OCardProps = ICardProps
export default OCard
