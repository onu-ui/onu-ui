import type { CSSProperties, ExtractPropTypes, PropType, StyleValue } from 'vue'
import { useLocale } from '@onu-ui/utils'
import { isBoolean } from './../../../utils/shared/is'
import type { OButtonProps } from './../../button'
const { t } = useLocale()
export const dialogProps = {
  /** 对话框是否可见 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  /** 是否显示遮罩层 */
  showMask: {
    type: Boolean,
    default: true,
  },
  /** 对话框的宽度，不设置的情况下会使用样式中的宽度值 */
  width: {
    type: [Number, String],
    default: 520,
  },
  /** 对话框的距离顶部的高度，默认auto居中显示 */
  top: {
    type: [Number, String],
  },
  /** 标题 */
  title: {
    type: String as PropType<any>,
  },
  /** 关闭时是否卸载节点 */
  destroyOnClose: Boolean,
  /** 对话框是否挂载在 body 元素下 */
  appendToBody: {
    type: Boolean,
    default: true,
  },
  /**  是否点击遮罩层可以关闭对话框 */
  maskClosable: {
    type: Boolean,
    default: true,
  },
  maskAnimationName: {
    type: String,
    default: 'o-fade-dialog',
  },
  dialogAnimationName: {
    type: String,
    default: 'o-zoom-dialog',
  },
  /** 确认按钮的内容 */
  okText: {
    type: String,
    default: t('locales.dialog.okText'),
  },
  /** 取消按钮的内容 */
  cancelText: {
    type: String,
    default: t('locales.dialog.cancelText'),
  },
  /** 确认按钮的Props */
  okProps: {
    type: Object as PropType<Partial<OButtonProps> >,
  },
  /** 取消按钮的Props */
  cancelProps: {
    type: Object as PropType<Partial<OButtonProps>>,
  },
  /** 是否显示右上角关闭按钮 */
  showClose: {
    type: Boolean,
    default: true,
  },
  /** 确认按钮是否为加载中状态 */
  okLoading: {
    type: Boolean,
    default: false,
  },
  /** 是否隐藏取消按钮 */
  hideCancel: {
    type: Boolean,
    default: false,
  },
  /** 是否展示页脚部分 */
  showFooter: {
    type: Boolean,
    default: true,
  },
  /** 蒙层的样式 */
  maskStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /** 对话框的类名 */
  dialogClass: {
    type: [String, Array] as PropType<string | any[]>,
  },
  /** 对话框的样式 */
  dialogStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /** 是否支持 ESC 键关闭对话框 */
  escToClose: {
    type: Boolean,
    default: true,
  },
  /** 对话框内容部分的类名 */
  bodyClass: {
    type: [String, Array] as PropType<string | any[]>,
  },
  /** 对话框内容部分的样式 */
  bodyStyle: {
    type: [String, Object, Array] as PropType<StyleValue>,
  },
  /** 对话框 的 z-index */
  zIndex: {
    type: Number,
    default: 1000,
  },
}

export const dialogEmits = {
  'update:visible': (val: boolean) => isBoolean(val),
  /** 点击确定按钮时触发 */
  'ok': () => true,
  /** 点击取消、关闭按钮时触发 */
  'cancel': () => true,
}
export type ODialogProps = ExtractPropTypes<typeof dialogProps>
