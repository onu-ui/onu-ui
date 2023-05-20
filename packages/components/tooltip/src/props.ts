import type { ExtractPropTypes, PropType } from 'vue'
import { commonTriggerProps } from '../../trigger'

export const toolTipProps = {
  ...commonTriggerProps,
  type: {
    type: String as PropType<'Dark' | 'Light'>,
    default: 'Dark',
  },
  content: String,
  backgroundColor: String,
}

export const toolTipEmits = {
  'update:popupVisible': (_visible: boolean) => true,
  'popupVisibleChange': (_visible: boolean) => true,
}

export type ToolTipEmits = typeof toolTipEmits
export type OToolTipEmits = ExtractPropTypes<typeof toolTipProps>
