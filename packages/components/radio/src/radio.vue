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
    <!-- todo: delete this span -->
    <!-- hack: class such as 'o-radio-${size} c-${textColor}' does not take effect, i must be set 'o-radio-xs o-radio-sm o-radio-md o-radio-lg etc' to make it work. -->
    <span
      class="
  w-0 h-0
  c-primaryBase c-secondaryBase c-successBase c-warningBase c-errorBase c-infoBase
  border-primaryBase border-secondaryBase border-successBase border-warningBase border-errorBase border-infoBase
  after:bg-primaryBase after:bg-secondaryBase after:bg-successBase after:bg-warningBase after:bg-errorBase after:bg-infoBase
  hover:border-primaryBase hover:border-secondaryBase hover:border-successBase hover:border-warningBase hover:border-errorBase hover:border-infoBase
  bg-primaryBase bg-secondaryBase bg-successBase bg-warningBase bg-errorBase bg-infoBase
  after:bg-primaryBase after:bg-secondaryBase after:bg-successBase after:bg-warningBase after:bg-errorBase after:bg-infoBase
  o-radio-label-xs o-radio-label-sm o-radio-label-md o-radio-label-lg
  o-radio-inner-xs o-radio-inner-sm o-radio-inner-md o-radio-inner-lg
  o-radio-xs o-radio-sm o-radio-md o-radio-lg
  "
    />
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
