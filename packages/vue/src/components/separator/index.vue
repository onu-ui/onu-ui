<script setup lang="ts">
import { computed } from 'vue'
import { separatorProps } from './props'

defineOptions({ name: 'OSeparator' })

const props = defineProps(separatorProps)
const classes = computed(() => [
  props.orientation === 'vertical' ? 'separator-v' : 'separator',
  props.strong && 'separator-strong',
])
</script>

<template>
  <div
    :class="classes"
    :role="decorative ? 'presentation' : 'separator'"
    :aria-orientation="decorative ? undefined : orientation"
  />
</template>
