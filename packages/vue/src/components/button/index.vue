<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { buttonProps } from './props'
import type { SizeType } from '@/composables/useProps'

defineOptions({
  name: 'OButton',
  inheritAttrs: false,
})

const props = defineProps(buttonProps)

defineSlots<{
  default: (props: unknown) => any
  icon: (props: unknown) => any
}>()

const slots = useSlots()
const binds = Object.assign({}, useAttrs(), props.to ? { href: props.to } : {})

const sizeMap: Record<SizeType, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const variants = {
  'default': 'btn-default',
  'soft': 'btn btn-soft',
  'outline': 'btn btn-outline',
  'solid': 'btn btn-solid',
  'solid-cover': 'btn btn-solid-cover',
  'dashed': 'btn btn-dashed',
  'dashed-cover': 'btn btn-dashed-cover',
  'link': 'btn btn-link',
  'ghost': 'btn btn-ghost',
  'ghost-light': 'btn btn-ghost-light',
}

const sizes = computed(() => sizeMap[props.size])

const base = computed(() => [props.variant ? variants[props.variant] ?? 'btn' : 'btn'])

const isDisabled = computed(() => props.loading || props.disabled)

const onlyIcon = computed(() => (slots.icon || props.icon) && !slots.default)
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="binds"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :class="[
      sizes,
      base,
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
