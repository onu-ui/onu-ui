<script setup lang="ts">
import { computed } from 'vue'
import { spinnerProps } from './props'

defineOptions({ name: 'Spinner' })

const props = defineProps(spinnerProps)
const sizeClasses = {
  xs: 'spinner-xs',
  sm: 'spinner-sm',
  md: 'spinner-md',
  lg: 'spinner-lg',
}
const variantClasses = {
  default: '',
  primary: 'spinner-primary',
  muted: 'spinner-muted',
}
const classes = computed(() => [
  'spinner',
  sizeClasses[props.size],
  variantClasses[props.variant],
])
</script>

<template>
  <span :class="classes" role="status" :aria-label="label" />
</template>
