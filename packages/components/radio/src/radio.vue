<script setup lang="ts" name="ORadio">
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { radioRef, radioGroup, isFocus, size, isDisabled, modelValue } = useRadio(props, emit)
const isBorder = computed(() => props.border)
const isChecked = computed(() => modelValue.value === props.label)
const fillColor = computed(() => `${props.labelColor || props.fill}Base`)
const textColor = computed(() => props.notTextColor ? `${props.labelColor}Base` : `${props.textColor || props.fill}Base`)
const labelColor = computed(() => `${props.labelColor ? `${props.labelColor}Base` : 'baseText'}`)

function handleChange() {
  nextTick(() => emit('change', modelValue.value))
}
</script>

<template>
  <label
    class="o-radio-check-base"
    :class="[
      isDisabled && `o-disabled after:cursor-not-allowed after:bg-${fillColor}`,
      `o-radio-${size}`,
      isBorder && `o-radio-check-disabled ${isChecked ? `border-${fillColor}` : 'border-baseBorder'}`,
      isChecked && `o-radio-check-checked`,
    ]"
  >
    <span
      class="o-radio-input"
    >
      <input
        ref="radioRef"
        v-model="modelValue"
        class="o-radio-original"
        :value="label"
        :name="name || radioGroup?.name"
        :disabled="isDisabled"
        type="radio"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @change="handleChange"
      >
      <span
        class="o-radio__inner o-radio-inner-base"
        :class="[
          isDisabled ? `o-disabled after:cursor-not-allowed` : `hover:border-${fillColor}`,
          `o-radio-inner-${size}`,
          isChecked && `border-${fillColor} bg-${fillColor} !after:scale-100 !after:-translate-x-1/2 !after:-translate-y-1/2 after:bg-${fillColor}`,
          isFocus && `border-${fillColor}`,
        ]"
      />
    </span>
    <span
      class="o-radio__label pl-2"
      :class="[
        isDisabled && `o-disabled`,
        `o-radio-label-${size}`,
        isChecked ? `c-${textColor}` : `c-${labelColor}`,
      ]"
      @keydown.stop
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<style scoped>
.o-radio__inner::after {
  border-radius: 100%;
  background-color: white;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}
</style>
