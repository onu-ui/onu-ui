<script setup lang="ts" name="OButton">
import { buttonProps } from './props'

const props = defineProps(buttonProps)
const isDisabled = computed(() => props.loading || props.disabled)
const typeBtn = computed(() => props.type !== 'default' && !props.light)
const typeLight = computed(() => props.type !== 'default' && props.light)
const defaultLight = computed(() => props.type === 'default' && props.light)
const defaultText = computed(() => props.type === 'default' && props.text)
const slots = useSlots()
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
      isDisabled ? 'o-disabled' : 'o-hover-active-base',
      `o-${type}`,
      `o-button-${size}`,
      onlyIcon && 'aspect-square px-0',
      typeBtn && `o-solid ${isDisabled ? '' : `hover-border-${type}BorderHover hover-bg-${type}LightHover hover-text-white active-text-white active-border-${type}BorderActive active-bg-${type}LightActive`} `,
      typeLight && `${isDisabled ? 'o-button-light-disable' : 'o-button-light'}`,
      text && `${isDisabled ? 'o-button-text-disable' : 'o-button-text'}`,
      shadow ? 'shadow-context:50' : 'shadow-transparent',
      defaultLight ? 'o-button-defaultLight' : '',
      defaultText ? 'o-button-defaultText' : '',
      dashed && 'border-dashed',
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon" />
    <slot />
  </component>
</template>
