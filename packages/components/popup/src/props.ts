import type { Placement, TriggerType } from './../../types'
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'update:popupVisible': (visible: boolean) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'popupVisibleChange': (visible: boolean) => true,
}

export type PopupEmits = typeof popupEmits
export type OPopupEmits = ExtractPropTypes<typeof popupProps>
