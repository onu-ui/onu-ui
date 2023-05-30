import type { SetupContext } from 'vue'
import { isArray } from '@onu-ui/utils'
import type { OCheckboxEmits, OCheckboxProps } from './checkbox'
import { checkboxGroupContextKey } from './constants'

export function useCheckbox(props: OCheckboxProps, emit?: SetupContext<OCheckboxEmits>['emit']) {
  const checkboxRef = ref<HTMLInputElement>()
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => Boolean(checkboxGroup))
  const modelValue = computed(() => isGroup.value ? checkboxGroup!.modelValue : props.modelValue)

  const size = computed(() => checkboxGroup?.size)

  const isDisabled = computed(() => {
    if (!isGroup.value)
      return props.disabled
    const { disabled, min, max } = checkboxGroup!
    if (disabled !== undefined)
      return disabled

    if (Array.isArray(modelValue.value)) {
      if (min !== -1 && modelValue.value.length === min)
        return modelValue.value.includes(props.label)

      if (max !== -1 && modelValue.value.length === max)
        return !modelValue.value.includes(props.label)
    }
  })

  const checked = computed<boolean>(() => {
    if (isGroup.value)
      return checkboxGroup!.modelValue.includes(props.label)

    else
      return props.modelValue === props.label
  })

  function toggle(evt: MouseEvent) {
    if (isDisabled.value)
      return

    if (isGroup.value && isArray(modelValue.value)) {
      const newValue = [...modelValue.value]
      newValue.includes(props.label)
        ? newValue.splice(newValue.indexOf(props.label), 1)
        : newValue.push(props.label)

      checkboxGroup!.changeEvent(newValue)
    }
    emit && emit('update:modelValue', props.label)
    emit && emit('change', props.label)
  }

  return {
    checkboxRef,
    isGroup,
    checkboxGroup,
    size,
    isDisabled,
    checked,
    modelValue,
    toggle,
  }
}
