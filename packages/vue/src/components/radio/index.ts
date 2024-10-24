import { withInstall } from '@onu-ui/utils'
import RadioGroup from './group.vue'
import Radio from './index.vue'

export const ORadio = withInstall(Radio)
export const ORadioGroup = withInstall(RadioGroup)

export * from './props'
