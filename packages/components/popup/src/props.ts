import type { ExtractPropTypes } from 'vue'
import { commonTriggerProps } from '../../trigger'

export const popupProps = {
  ...commonTriggerProps,
  title: String,
  content: String,
}

export const popupEmits = {
  'update:popupVisible': (_visible: boolean) => true,
  'popupVisibleChange': (_visible: boolean) => true,
}

export type PopupEmits = typeof popupEmits
export type OPopupEmits = ExtractPropTypes<typeof popupProps>
