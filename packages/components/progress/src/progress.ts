import type { ExtractPropTypes, PropType } from 'vue'
import type { SizeType } from '../../types'

export interface ProgressColor { color: string; percentage: number }
export type ProgressFn = (percentage: number) => string

export const TYPE_MAP = {
  line: 'line',
  circle: 'circle',
  dashboard: 'dashboard',
}
export const STATUS_MAP = {
  success: 'success',
  warning: 'warning',
  error: 'error',
}
export const STATUS_COLOR_MAP: Record<string, string> = {
  success: 'var(--onu-theme-success)',
  error: 'var(--onu-theme-error)',
  warning: 'var(--onu-theme-warning)',
  default: 'var(--onu-theme-primary)',
}
export const SIZE_MAP: Record<string, number> = {
  xs: 3,
  sm: 6,
  md: 9,
  lg: 12,
}

export const progressProps = {
  /**
   * @description The type of progress bar.
   */
  type: {
    type: String as PropType<keyof typeof TYPE_MAP>,
    default: 'line',
  },
  /**
   * @description Progress percentage.
   */
  percentage: {
    type: Number,
    default: 0,
  },
  /**
   * @description The current status of progress bar.
   */
  status: {
    type: String as PropType<keyof typeof STATUS_MAP>,
    default: '',
  },
  /**
   * @description Set indeterminate progress.
   */
  indeterminate: Boolean,
  /**
   * @description Control the animation duration of indeterminate progress.
   */
  duration: {
    type: Number,
    default: 3,
  },
  /**
   * @description The width of progress bar.
   */
  strokeWidth: {
    type: [Number, String] as PropType<number | SizeType>,
    default: 6,
  },
  /**
   * @description Circle/Dashboard type shape at the end path.
   */
  strokeLinecap: {
    type: String as PropType<'butt' | 'round' | 'square'>,
    default: 'round',
  },
  // 讲line进度条文字内置在进度条内
  textInside: Boolean,
  /**
   * @description The canvas width of circle progress bar.
   */
  width: {
    type: Number,
    default: 126,
  },
  /**
   * @description Whether to show percentage.
   */
  showText: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Progress bar color. Overrides `status` prop.
   */
  color: {
    type: [String, Array, Function] as PropType<string | ProgressColor[] | ProgressFn>,
    default: '',
  },
  /**
   * @description Progress bar Background color.
   */
  bgColor: {
    type: [String, Array, Function] as PropType<string | ProgressColor[] | ProgressFn>,
    default: '',
  },
  striped: Boolean,
  /**
   * @description Let the stripes flow.
   */
  stripedFlow: Boolean,
  /**
   * @direction Do not synchronize the text color with the progress bar color.
   */
  notTextColor: Boolean,
  /**
   * @description Custom text format.
   */
  format: {
    type: Function as PropType<ProgressFn>,
    default: (percentage: number): string => `${percentage}%`,
  },
} as const

export type OProgressProps = ExtractPropTypes<typeof progressProps>
