<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import type { SizeType } from '../../composables/useProps'
import { buttonProps } from './props'

defineOptions({
  name: 'OButton',
})

const props = defineProps(buttonProps)

defineSlots<{
  default: (props: unknown) => any
  icon: (props: unknown) => any
}>()

const size = computed(() => {
  const sizeMap: Record<SizeType, string> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  }
  return sizeMap[props.size]
})

const isDisabled = computed(() => props.loading || props.disabled)
const slots = useSlots()
const onlyIcon = computed(() => (slots.icon || props.icon) && !slots.default)
const binds = Object.assign({}, useAttrs(), props.to ? { href: props.to } : {})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="binds"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    class="btn-default"
    :class="[
      size,
      onlyIcon && 'aspect-square px-0',
      rounded && 'rounded-full',
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon">
      <div v-if="icon" :class="icon" />
    </slot>
    <slot />
  </component>
</template>
