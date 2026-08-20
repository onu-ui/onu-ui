<script setup lang="ts">
import { computed } from 'vue'
import { alertProps } from './props'

defineOptions({ name: 'OAlert' })

const props = defineProps(alertProps)

defineSlots<{
  default?: () => any
  icon?: () => any
  title?: () => any
}>()

const variantClasses = {
  default: '',
  soft: 'alert-soft',
  destructive: 'alert-destructive',
}

const classes = computed(() => [
  'alert',
  variantClasses[props.variant],
])
</script>

<template>
  <div :class="classes" role="alert">
    <slot name="icon" />
    <div v-if="title || $slots.title" class="alert-title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div v-if="description || $slots.default" class="alert-desc">
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>
