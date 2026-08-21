<script setup lang="ts">
import { computed, useAttrs, useId, useTemplateRef, watchEffect } from 'vue'
import { checkboxProps } from './props'

defineOptions({
  name: 'OCheckbox',
  inheritAttrs: false,
})

const props = defineProps(checkboxProps)
defineSlots<{
  default?: () => any
  indicator?: (props: { checked: boolean, indeterminate: boolean }) => any
}>()
const model = defineModel<boolean>({ default: false })
const generatedId = useId()
const input = useTemplateRef<HTMLInputElement>('input')
const attrs = useAttrs()

const inputId = computed(() => props.id ?? generatedId)
const sizeClasses = {
  xs: 'checkbox-xs',
  sm: 'checkbox-sm',
  md: 'checkbox-md',
  lg: 'checkbox-lg',
}
const classes = computed(() => [
  'checkbox',
  sizeClasses[props.size],
  (model.value || props.indeterminate) && 'bg-context',
])

watchEffect(() => {
  if (input.value)
    input.value.indeterminate = props.indeterminate
})

function forwardedAttrs() {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
}
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer" :class="attrs.class" :style="attrs.style" :for="inputId">
    <span :class="classes">
      <input
        v-bind="forwardedAttrs()"
        :id="inputId"
        ref="input"
        v-model="model"
        class="peer"
        type="checkbox"
        :name
        :value
        :disabled
      >
      <span class="checkbox-dot">
        <slot name="indicator" :checked="model" :indeterminate="indeterminate">
          <span aria-hidden="true">✓</span>
        </slot>
      </span>
    </span>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
