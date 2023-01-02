import { provideGlobalConfig } from '@onu-ui/utils'
import { renderSlot } from 'vue'
import type { language } from '@onu-ui/utils'
import type { PropType } from 'vue'
import type { SizeType } from '../../types'

const props = {
  locale: {
    type: Object as PropType<language>,
  },
  // TODO
  size: {
    type: String as PropType<SizeType>,
  },
  namespace: {
    type: String,
    default: 'o',
  },
}

const ConfigProvider = defineComponent({
  name: 'OConfigProvider',
  props,
  setup(props, { slots }) {
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})

export default ConfigProvider
