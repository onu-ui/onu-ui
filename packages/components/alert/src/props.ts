import type OAlert from './index.vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType } from '../../types'

export const alertProps = {
  /** 卡片大小，支持 md，sm */
  size: {
    type: [String] as PropType<SizeType>,
    default: 'md',
  },
}

export type OAlertProps = ExtractPropTypes<typeof alertProps>
export type OCardInstance = InstanceType<typeof OAlert>
