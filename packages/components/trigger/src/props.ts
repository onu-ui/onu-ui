import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { Placement, TriggerType } from './../../types'

export const commonTriggerProps = {
  /** Whether the popup is visible */
  popupVisible: {
    type: Boolean,
    default: undefined,
  },
  /** Whether the popup is visible by default (uncontrolled mode) */
  defaultPopupVisible: {
    type: Boolean,
    default: false,
  },
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
    default: 'bottom',
  },
  /**
   * The style of the popup content
   */
  contentStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /**
   * The class name of the popup content
   */
  contentClass: {
    type: [String, Array, Object],
  },
  /**
   * The style of the popup arrow
   */
  arrowStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /**
   * The class name of the popup arrow
   */
  arrowClass: {
    type: [String, Array, Object],
  },
  /** Mount container for popup */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>,
  },
  /** Whether to update the position of the popup when the container is scrolled */
  updateAtScroll: {
    type: Boolean,
    default: false,
  },
  /**
   * The style of the popup
   */
  popupStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /**
   * The duration of the popup animation
   */
  duration: {
    type: [Number, Object] as PropType< | number | { enter: number; leave: number }>,
  },
  /**
   * The moving distance of the popup
   */
  popupTranslate: {
    type: [Array, Object] as PropType<
    [number, number] | { [key in Placement]?: [number, number] }
    >,
  },
}

export const TriggerProps = {
  ...commonTriggerProps,
  /**
   * Whether the trigger is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * The offset of the popup (the offset distance of the popup from the trigger)
   */
  popupOffset: {
    type: Number,
    default: 0,
  },
  /**
   * Whether the popup shows an arrow
   */
  showArrow: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the popup follows the mouse
   */
  alignPoint: {
    type: Boolean,
    default: false,
  },
  /**
   * The name of the popup animation
   */
  animationName: {
    type: String,
    default: 'fade-in',
  },
  /**
   * Delay trigger time of mouseenter event (ms)
   */
  mouseEnterDelay: {
    type: Number,
    default: 100,
  },
  /**
   * Delay trigger time of mouseleave event (ms)
   */
  mouseLeaveDelay: {
    type: Number,
    default: 100,
  },
  /**
   * Delay trigger time of focus event (ms)
   */
  focusDelay: {
    type: Number,
    default: 0,
  },
  /**
   * Whether to set the width of the popup to the width of the trigger
   */
  autoFitPopupWidth: {
    type: Boolean,
    default: false,
  },
  autoFitTransformOrigin: {
    type: Boolean,
    default: false,
  },
  hideEmpty: {
    type: Boolean,
    default: false,
  },
}

export const triggerEmits = {
  'update:popupVisible': (_visible: boolean) => true,
  'popupVisibleChange': (_visible: boolean) => true,
  'show': () => true,
  'hide': () => true,
  'resize': () => true,
}

export type TriggerEmits = typeof triggerEmits
export type OTriggerEmits = ExtractPropTypes<typeof TriggerProps>
