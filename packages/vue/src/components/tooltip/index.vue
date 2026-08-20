<script setup lang="ts">
import { shallowRef } from 'vue'

defineOptions({ name: 'OTooltip' })

const props = withDefaults(defineProps<{
  content?: string
  delay?: number
}>(), {
  content: '',
  delay: 300,
})

const open = shallowRef(false)
let timer: ReturnType<typeof setTimeout> | undefined

function show() {
  clearTimeout(timer)
  timer = setTimeout(() => open.value = true, props.delay)
}

function hide() {
  clearTimeout(timer)
  open.value = false
}
</script>

<template>
  <span class="relative inline-flex" @mouseenter="show" @mouseleave="hide" @focusin="show" @focusout="hide" @keydown.esc="hide">
    <slot />
    <span v-if="open" class="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs text-background shadow-md" role="tooltip">
      <slot name="content">{{ content }}</slot>
    </span>
  </span>
</template>
