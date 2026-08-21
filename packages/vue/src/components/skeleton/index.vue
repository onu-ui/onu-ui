<script setup lang="ts">
import { computed } from 'vue'
import { skeletonProps } from './props'

defineOptions({ name: 'Skeleton' })

const props = defineProps(skeletonProps)
const variantClasses = {
  default: 'skeleton',
  text: 'skeleton-text',
  avatar: 'skeleton-avatar',
}
const classes = computed(() => variantClasses[props.variant])
</script>

<template>
  <div :class="classes" aria-hidden="true" />
</template>
