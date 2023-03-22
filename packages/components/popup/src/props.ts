import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { Placement, TriggerType } from './../../types'

export const popupProps = {
  /** Whether the popup is visible v-model */
  popupVisible: {
    type: Boolean,
    default: undefined,
  },
  /** Whether the popup is visible by default (uncontrolled mode) */
  defaultPopupVisible: {
    type: Boolean,
    default: false,
  },
  title: String,
  content: String,
  /** trigger type: 'hover','click','focus','contextMenu' */
  trigger: {
    type: [String, Array] as PropType<TriggerType | TriggerType[]>,
    default: 'hover',
  },
  /**
   * Popup position
   * @values
   * 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
   * @default 'top'
   */
  position: {
    type: String as PropType<Placement>,
    default: 'top',
  },
  /**
   * The class name of the popup content
   */
  contentClass: {
    type: String,
  },
  /**
   * The style of the popup content
   */
  contentStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /**
   * The class name of the popup arrow
   */
  arrowClass: {
    type: String,
  },
  /**
   * The style of the popup arrow
   */
  arrowStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /**
   * Mount container for pop-up box
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement | undefined>,
  },
}

export const popupEmits = {
  'update:popupVisible': (_visible: boolean) => true,
  'popupVisibleChange': (_visible: boolean) => true,
}

export type PopupEmits = typeof popupEmits
export type OPopupEmits = ExtractPropTypes<typeof popupProps>
