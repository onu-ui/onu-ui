import type { AttachNode, INode, Placement, TriggerType } from '../../types'
import type { PropType } from 'vue'

export const wrapperProps = {
  parent: Object,
  visible: Boolean,
  attach: {
    type: [String, Function] as PropType<AttachNode>,
    default: 'body',
  },
  forwardRef: Function as PropType<(el: HTMLElement) => void>,
}

export const popupProps = {
  attach: {
    type: [String, Function] as PropType<AttachNode>,
    default: 'body',
  },
  content: {
    type: [String, Function] as PropType<string | INode>,
    default: '',
  },
  triggerElement: {
    type: [String, Function] as PropType<string | INode>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hideEmptyPopup: {
    type: Boolean,
    default: false,
  },
  showArrow: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: [String] as PropType<Placement>,
    default: 'top',
  },
  trigger: {
    type: [String] as PropType<TriggerType>,
    default: 'hover',
  },
  /** show content */
  visible: {
    type: Boolean,
    default: false,
  },
}
