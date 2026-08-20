<script setup lang="ts">
import { computed } from 'vue'
import { badgeProps } from './props'

defineOptions({ name: 'OBadge' })

const props = defineProps(badgeProps)

const sizeClasses = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
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
  props.variant === 'outline' && 'badge-outline',
  props.dot && 'badge-dot',
  props.position && positionClasses[props.position],
])
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
