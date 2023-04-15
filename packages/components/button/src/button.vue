<script setup lang="ts" name="OButton">
import { buttonProps } from './button'
import { buttonGroupContextKey } from './constants'

const props = defineProps(buttonProps)

const emit = defineEmits(['click'])

const buttonGroupContext = inject(buttonGroupContextKey, undefined)

// todo: The property should follow this inheritance rule: component props > custom group rule > formItem props > form props > global size > default
const _type = computed(() => props.type || buttonGroupContext?.type || 'default')
const _size = computed(() => props.size || buttonGroupContext?.size || 'md')

const isDisabled = computed(() => props.loading || props.disabled)
const typeBtn = computed(() => _type.value !== 'default' && !props.light)
const typeLight = computed(() => _type.value !== 'default' && props.light)
const defaultLight = computed(() => _type.value === 'default' && props.light)
const defaultText = computed(() => _type.value === 'default' && props.text)
const slots = useSlots()
const onlyIcon = computed(() => (slots.icon || props.icon) && !slots.default)
const binds = Object.assign({}, useAttrs(), props.to ? { href: props.to } : {})

const onClick = (event) => {
  emit('click', event, props.value)
}
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
      `o-${_type}`,
      `o-button-${_size}`,
      onlyIcon && 'aspect-square px-0',
      typeBtn && `o-solid ${isDisabled ? '' : `hover-border-${_type}BorderHover hover-bg-${_type}LightHover hover-text-white active-text-white active-border-${_type}BorderActive active-bg-${_type}LightActive`} `,
      typeLight && `${isDisabled ? 'o-button-light-disable' : 'o-button-light'}`,
      text && `${isDisabled ? 'o-button-text-disable' : 'o-button-text'}`,
      shadow ? 'shadow-context:50' : 'shadow-transparent',
      defaultLight ? 'o-button-defaultLight' : '',
      defaultText ? 'o-button-defaultText' : '',
      dashed && 'border-dashed',
    ]"
    @click="onClick"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon">
      <div v-if="icon" :class="icon" />
    </slot>
    <slot />
  </component>
</template>
