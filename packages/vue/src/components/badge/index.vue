<script setup lang="ts">
import { computed } from 'vue'
import { badgeProps } from './props'

defineOptions({ name: 'Badge' })

const props = defineProps(badgeProps)

defineSlots<{
  default?: () => any
}>()

const sizeClasses = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
}
const variantClasses = {
  default: '',
  secondary: 'badge-secondary',
  destructive: 'badge-destructive',
  outline: 'badge-outline',
  ghost: 'badge-ghost',
  link: 'badge-link',
}
const positionClasses = {
  tl: 'badge-pos-tl',
  tr: 'badge-pos-tr',
  bl: 'badge-pos-bl',
  br: 'badge-pos-br',
}

const classes = computed(() => [
  'badge',
  sizeClasses[props.size],
  variantClasses[props.variant],
  props.dot && 'badge-dot',
  props.position && positionClasses[props.position],
])
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    data-slot="badge"
    :data-variant="variant"
    :data-size="size"
  >
    <slot />
  </component>
</template>
