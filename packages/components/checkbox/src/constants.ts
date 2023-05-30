import type { InjectionKey } from 'vue'
import type { OCheckboxGroupProps } from './checkbox-group'

export interface OCheckboxGroupContext extends OCheckboxGroupProps {
  changeEvent: (val: OCheckboxGroupProps['modelValue']) => void
}

export const checkboxGroupContextKey: InjectionKey<OCheckboxGroupContext> = Symbol(
  'checkboxGroupContextKey',
)
