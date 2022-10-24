<script setup lang="ts" name="OButton">
import { buttonProps } from './props'

const props = defineProps(buttonProps)
const slots = useSlots()
const isDisabled = computed(() => props.loading || props.disabled)
const onlyIcon = computed(() => slots.icon && !slots.default)
const binds = Object.assign({}, useAttrs(), props.to ? { href: props.to } : {})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="binds"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    class="o-button-base"
    :class="[
      light ? 'o-button-light' : '',
      text ? 'o-button-text' : '',
      `o-button-${size}`,
      isDisabled ? 'o-disabled' : 'o-transition o-button-hover o-button-active',
      onlyIcon && 'aspect-square px-0',
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon" />
    <slot />
  </component>
</template>
