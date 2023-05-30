import type { ComputedRef, SetupContext } from 'vue'
import type { MaybeRef } from '@onu-ui/utils'
import type { SizeType } from '../../types'
import { radioGroupKey } from './constants'
import type { ORadioEmits, ORadioProps } from './radio'

function useProp<T>(name: string): ComputedRef<T | undefined> {
  const vm = getCurrentInstance()!
  return computed(() => (vm.proxy?.$props as any)[name] ?? undefined)
}

function useDisabled(fallback?: MaybeRef<boolean | undefined>) {
  const disabled = useProp<boolean>('disabled')
  return computed(
    () => disabled.value || unref(fallback) || false,
  )
}

function useSize(fallback?: MaybeRef<SizeType | undefined>) {
  const size = useProp<SizeType>('size')
  return computed(
    () => size.value || unref(fallback) || 'md',
  )
}

export function useRadio(props: { label: ORadioProps['label']; modelValue?: ORadioProps['modelValue'] }, emit?: SetupContext<ORadioEmits>['emit']) {
  const radioRef = ref<HTMLInputElement>()
  const radioGroup = inject(radioGroupKey, undefined)
  const isGroup = computed(() => Boolean(radioGroup))
  // two-way binding
  const modelValue = computed<ORadioProps['modelValue']>({
    get() {
      return isGroup.value ? radioGroup!.modelValue : props.modelValue! // modelValue must not be undefined and null
    },
    set(val) {
      if (isGroup.value)
        radioGroup!.changeEvent(val)

      else
        emit && emit('update:modelValue', val)

      radioRef.value!.checked = props.modelValue === props.label
    },
  })

  // todo: inject form attr
  const size = useSize(computed(() => radioGroup?.size)) // Priority: radio-props > radio-group-props > form attr
  const isDisabled = useDisabled(computed(() => radioGroup?.disabled))
  const isFocus = ref(false)
  const tabIndex = computed(() => {
    return (isDisabled.value || (isGroup.value && modelValue.value !== props.label)) ? -1 : 0
  })

  return {
    radioRef,
    isGroup,
    radioGroup,
    isFocus,
    size,
    isDisabled,
    tabIndex,
    modelValue,
  }
}
