<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { buttonProps } from './props'

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
const attrs = useAttrs()

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

const sizeClasses = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const isDisabled = computed(() => props.loading || props.disabled)

const onlyIcon = computed(() => (slots.icon || props.icon) && !slots.default)

const classes = computed(() => [
  props.variant ? variants[props.variant] : 'btn',
  sizeClasses[props.size],
  onlyIcon.value && 'aspect-square px-0',
  props.rounded && 'rounded-full',
])

function handleClick(event: MouseEvent) {
  if (!isDisabled.value) {
    const listener = attrs.onClick
    if (typeof listener === 'function')
      listener(event)
    else if (Array.isArray(listener))
      listener.forEach(handler => typeof handler === 'function' && handler(event))
    return
  }

  event.preventDefault()
  event.stopImmediatePropagation()
}

function forwardedAttrs() {
  const { onClick: _onClick, ...rest } = attrs
  return rest
}
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="forwardedAttrs()"
    :href="to || undefined"
    :type="to ? undefined : type"
    :disabled="to ? undefined : isDisabled"
    :aria-disabled="isDisabled || undefined"
    :aria-busy="loading || undefined"
    :tabindex="to && isDisabled ? -1 : undefined"
    :class="classes"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner spinner-xs" aria-hidden="true" />
    <slot v-else name="icon">
      <div v-if="icon" :class="icon" />
    </slot>
    <slot />
  </component>
</template>
