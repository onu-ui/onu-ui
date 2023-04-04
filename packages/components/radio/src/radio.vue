<script setup lang="ts" name="ORadio">
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { radioRef, radioGroup, isFocus, size, isDisabled, modelValue } = useRadio(props, emit)
const isBorder = computed(() => props.border)
const isChecked = computed(() => modelValue.value === props.label)
const fillColor = computed(() => props.labelColor || props.fill)
const textColor = computed(() => props.notTextColor ? props.labelColor : (props.textColor || props.fill))
const labelColor = computed(() => props.labelColor || 'baseText')

function handleChange() {
  nextTick(() => emit('change', modelValue.value))
}
</script>

<template>
  <label
    class="o-radio-check-base"
    :class="[
      isDisabled && `o-disabled`,
      `o-radio-${size}`,
      isBorder && `o-radio-check-disabled ${isChecked ? `border-${fillColor}Base` : 'border-baseBorder'}`,
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
      <!-- use `o-after:psdc-DEFAULT` to set `::after{ content: '' }` -->
      <span
        class="o-radio-inner-base o-after:psdc-DEFAULT o-radio-inner-after"
        :class="[
          isDisabled && `o-disabled after:cursor-not-allowed`,
          `o-radio-inner-${size}`,
          isChecked && `border-${fillColor}Base bg-${fillColor}Base !after:scale-100 !after:-translate-x-1/2 !after:-translate-y-1/2`,
          !(isChecked || isDisabled) && `hover-border-${fillColor}BorderHover`,
          isFocus && `border-${fillColor}Base`,
        ]"
      />
    </span>
    <span
      class="pl-2"
      :class="[
        isDisabled && `o-disabled`,
        `o-radio-label-${size}`,
        isChecked ? `text-${textColor}Base` : `text-${labelColor}Base`,
      ]"
      @keydown.stop
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
