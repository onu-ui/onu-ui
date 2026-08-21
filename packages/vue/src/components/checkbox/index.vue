<script setup lang="ts">
import { computed, useAttrs, useId, useTemplateRef, watchEffect } from 'vue'
import { checkboxProps } from './props'

defineOptions({
  name: 'Checkbox',
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
const indicatorClasses = computed(() => [
  'checkbox-dot',
  (model.value || props.indeterminate) && 'size-full op-100',
])

watchEffect(() => {
  if (input.value)
    input.value.indeterminate = props.indeterminate
})

function forwardedAttrs() {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
}

function handleChange(event: Event) {
  model.value = (event.target as HTMLInputElement).checked
}
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer" :class="attrs.class" :style="attrs.style" :for="inputId">
    <span :class="classes">
      <input
        v-bind="forwardedAttrs()"
        :id="inputId"
        ref="input"
        :checked="model"
        class="peer"
        type="checkbox"
        :name
        :value
        :disabled
        @change="handleChange"
      >
      <span :class="indicatorClasses">
        <slot name="indicator" :checked="model" :indeterminate="indeterminate">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-4/5">
            <path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </slot>
      </span>
    </span>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
