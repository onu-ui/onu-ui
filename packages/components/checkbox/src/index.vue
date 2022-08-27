
<script lang="ts" setup name="O-Checkbox">
import { isBoolean, isNumber, isString } from '@onu-ui/utils'
interface ISwitchProps {
  modelValue?: string | boolean |number,
  disabled?:boolean,
  trueLabel?: string | number,
  falseLabel?: string | number,
  label?:string,
  name?:string,
  indeterminate?: boolean,
}

const props = withDefaults(defineProps<ISwitchProps>(), {
  name: '',
  indeterminate: false, // TODO
  trueLabel: '',
  falseLabel: '',
  label: '',
  disabled: false,
  modelValue: '',

})
const emit = defineEmits(['update:modelValue', 'change'])
const innerState = ref<boolean>(false)

const emitChangeEvt = (val:string | number | boolean): void => {
  emit('change', val)
}

const handleChange = () => {
  if (props.trueLabel && innerState.value) {
    emit('update:modelValue', props.trueLabel)
    emitChangeEvt(props.trueLabel)
    return
  }
  if ((props.falseLabel || props.falseLabel === 0) && !innerState.value) {
    emit('update:modelValue', props.falseLabel)
    emitChangeEvt(props.falseLabel)
    return
  }
  emit('update:modelValue', innerState.value)
  emitChangeEvt(innerState.value)
}
const handleClick = () => {
  if(props.disabled) return
  innerState.value = !innerState.value
  handleChange()
}

const init = () => {
  if (isBoolean(props.modelValue)) {
    innerState.value = props.modelValue
    return
  }
  if (isString(props.modelValue) || isNumber(props.modelValue)) {
    if (props.modelValue === props.trueLabel) {
      innerState.value = true
      return
    }
    if (props.modelValue === props.falseLabel) {
      innerState.value = false
      return
    }
    innerState.value = false
  }
}
init()
watch(() => props.modelValue, () => {
  init()
})
</script>

<template>
  <label :class="`o-checkbox ${disabled ? 'o-disabled' : 'cursor-pointer'}`">
    <span :class="`o-checkbox-input ${innerState ? 'o-checkbox-input-check' : ''}`">
      <input
        v-model="innerState"
        :class="`o-checkbox-original ${disabled ? 'o-disabled' : 'cursor-pointer'}`"
        :name="name"
        :value="innerState"
        type="checkbox"
        :disabled="disabled"
        @click="handleClick"
      >
      <span
        :class="`
              o-checkbox-inner
              ${indeterminate ? 'o-checkbox-indeterminate' : 'o-checkbox-after'}
              ${innerState ? 'o-checkbox-inner-check' : ''}`"
        :o="innerState ? 'secondary' : 'white'"
      />
    </span>
    <span class="o-checkbox-label">
      {{ label }}
    </span>
  </label>
</template>
