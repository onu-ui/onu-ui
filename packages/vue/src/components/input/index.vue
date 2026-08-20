<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { inputProps } from './props'

defineOptions({
  name: 'OInput',
  inheritAttrs: false,
})

const props = defineProps(inputProps)
defineSlots<{
  prefix?: () => any
  suffix?: () => any
}>()
const model = defineModel<string | number>({ default: '' })
const attrs = useAttrs()

const sizeClasses = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
}

const classes = computed(() => [
  'input',
  sizeClasses[props.size],
  props.dashed && 'input-dashed',
])

function forwardedAttrs() {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  model.value = props.type === 'number' && target.value !== '' ? target.valueAsNumber : target.value
}
</script>

<template>
  <label v-if="$slots.prefix || $slots.suffix" :class="[classes, attrs.class]" :style="attrs.style">
    <slot name="prefix" />
    <input
      v-bind="forwardedAttrs()"
      :id
      class="grow"
      :name
      :type
      :placeholder
      :disabled
      :readonly
      :value="model"
      @input="handleInput"
    >
    <slot name="suffix" />
  </label>
  <input
    v-else
    v-bind="attrs"
    :id
    :name
    :type
    :placeholder
    :disabled
    :readonly
    :value="model"
    :class="classes"
    @input="handleInput"
  >
</template>
