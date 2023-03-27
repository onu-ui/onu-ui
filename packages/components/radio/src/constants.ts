import type { InjectionKey } from 'vue'
import type { ORadioGroupProps } from './radio-group'

export interface RadioGroupContext extends ORadioGroupProps {
  changeEvent: (val: ORadioGroupProps['modelValue']) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupKey')
