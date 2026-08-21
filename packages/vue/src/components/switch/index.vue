<script setup lang="ts">
import { computed, useAttrs, useId } from 'vue'
import { switchProps } from './props'

defineOptions({
  name: 'OnuSwitch',
  inheritAttrs: false,
})

const props = defineProps(switchProps)
defineSlots<{
  default?: () => any
  thumb?: (props: { checked: boolean }) => any
}>()
const model = defineModel<boolean>({ default: false })
const generatedId = useId()
const attrs = useAttrs()

const inputId = computed(() => props.id ?? generatedId)
const sizeClasses = {
  xs: 'switch-xs',
  sm: 'switch-sm',
  md: 'switch-md',
  lg: 'switch-lg',
}
const classes = computed(() => [
  'switch',
  'switch-default',
  sizeClasses[props.size],
  model.value && 'bg-context',
])
const thumbClasses = computed(() => [
  'switch-dot',
  model.value && 'translate-x-$dot-size',
])

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
        :checked="model"
        class="peer"
        type="checkbox"
        role="switch"
        :name
        :disabled
        :aria-checked="model"
        @change="handleChange"
      >
      <span :class="thumbClasses">
        <slot name="thumb" :checked="model" />
      </span>
    </span>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
