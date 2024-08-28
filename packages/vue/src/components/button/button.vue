<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { buttonProps } from './props'

defineOptions({
  name: 'OButton',
})

const props = defineProps(buttonProps)

defineSlots<{
  default: (props: unknown) => any
  icon: (props: unknown) => any
}>()

const _size = computed(() => props.size || 'md')
const isDisabled = computed(() => props.loading || props.disabled)
const typeLight = computed(() => props.light)
const defaultLight = computed(() => props.light)
const defaultText = computed(() => props.text)
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
      isDisabled ? 'o-disabled' : 'o-hover-active-base',
      `o-button-${_size}`,
      onlyIcon && 'aspect-square px-0',
      typeLight && `${isDisabled ? 'o-button-light-disable' : 'o-button-light'}`,
      text && `${isDisabled ? 'o-button-text-disable' : 'o-button-text'}`,
      rounded && 'rounded-full',
      shadow ? 'shadow-context:50' : 'shadow-transparent',
      defaultLight ? 'o-button-defaultLight' : '',
      defaultText ? 'o-button-defaultText' : '',
      dashed && 'border-dashed',
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon">
      <div v-if="icon" :class="icon" />
    </slot>
    <slot />
  </component>
</template>
