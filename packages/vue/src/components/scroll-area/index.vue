<script setup lang="ts">
defineOptions({ name: 'ScrollArea' })

withDefaults(defineProps<{
  maxHeight?: string
  ariaLabel?: string
}>(), {
  maxHeight: '20rem',
  ariaLabel: 'Scrollable content',
})
</script>

<template>
  <div class="overflow-auto overscroll-contain rounded-md" :style="{ maxHeight }" role="region" :aria-label="ariaLabel" tabindex="0">
    <slot />
  </div>
</template>
