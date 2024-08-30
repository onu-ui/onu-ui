import type { ExtractPropTypes, PropType } from 'vue'
import { disabled, loadable, readonly, sizeable } from '@/composables/useProps'

export type ButtonVariants = 'default' | 'soft' | 'outline' | 'solid' | 'solid-cover' | 'dashed' | 'dashed-cover' | 'link' | 'ghost' | 'ghost-light'

export const buttonProps = {
  to: String,
  rounded: Boolean,
  icon: String,

  size: sizeable,
  disabled,
  readonly,
  loading: loadable,
  variant: { type: String as PropType<ButtonVariants> },
}

export const buttonGroupProps = {
  size: buttonProps.size,
  spacer: Boolean,
}

export type OButtonProps = ExtractPropTypes<typeof buttonProps>
export type OButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
