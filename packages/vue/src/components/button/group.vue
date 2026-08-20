<script setup lang="ts">
import { computed } from 'vue'
import { buttonGroupProps } from './props'

defineOptions({ name: 'OButtonGroup' })

const props = defineProps(buttonGroupProps)
const classes = computed(() => [
  props.orientation === 'vertical' ? 'btn-group-v' : 'btn-group-h',
  props.spacer && 'gap-2',
])
</script>

<template>
  <div :class="classes" role="group">
    <slot />
  </div>
</template>
