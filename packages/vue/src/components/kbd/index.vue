<script setup lang="ts">
import { computed } from 'vue'
import { kbdProps } from './props'

defineOptions({ name: 'OnuKbd' })

const props = defineProps(kbdProps)
const sizeClasses = {
  xs: 'kbd-xs',
  sm: 'kbd-sm',
  md: 'kbd-md',
  lg: 'kbd-lg',
}
const classes = computed(() => ['kbd', sizeClasses[props.size], props.outline && 'kbd-outline'])
</script>

<template>
  <kbd :class="classes"><slot /></kbd>
</template>
