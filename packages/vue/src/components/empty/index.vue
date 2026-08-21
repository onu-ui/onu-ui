<script setup lang="ts">
import { emptyProps } from './props'

defineOptions({ name: 'Empty' })

defineProps(emptyProps)

defineSlots<{
  default?: () => any
  media?: () => any
  title?: () => any
  description?: () => any
}>()
</script>

<template>
  <div class="emptybox">
    <div v-if="title || description || $slots.media || $slots.title || $slots.description" class="emptybox-header">
      <div v-if="$slots.media" class="emptybox-media emptybox-media-icon">
        <slot name="media" />
      </div>
      <div v-if="title || $slots.title" class="emptybox-title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <p v-if="description || $slots.description" class="emptybox-desc">
        <slot name="description">
          {{ description }}
        </slot>
      </p>
    </div>
    <div v-if="$slots.default" class="emptybox-content">
      <slot />
    </div>
  </div>
</template>
