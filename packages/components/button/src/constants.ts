import type { InjectionKey } from 'vue'
import type { OButtonProps } from './button'

export interface OButtonGroupContext {
  size?: OButtonProps['size']
  type?: OButtonProps['type']
}

export const buttonGroupContextKey: InjectionKey<OButtonGroupContext> = Symbol(
  'buttonGroupContextKey',
)
