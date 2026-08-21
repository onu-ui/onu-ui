import type { ExtractPropTypes, PropType } from 'vue'
import { disabled, loadable, readonly, sizeable } from '@/composables/useProps'

export type ButtonVariants = 'default' | 'soft' | 'outline' | 'solid' | 'solid-cover' | 'dashed' | 'dashed-cover' | 'link' | 'ghost' | 'ghost-light'

export const buttonProps = {
  to: String,
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  rounded: Boolean,
  icon: String,

  size: sizeable,
  disabled,
  readonly,
  loading: loadable,
  variant: {
    type: String as PropType<ButtonVariants>,
  },
}

export const buttonGroupProps = {
  size: buttonProps.size,
  spacer: Boolean,
  orientation: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
