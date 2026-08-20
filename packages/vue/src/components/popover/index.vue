<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import { useDismissableLayer } from '../../composables/useDismissableLayer'

defineOptions({ name: 'OPopover' })

const props = withDefaults(defineProps<{
  align?: 'start' | 'center' | 'end'
  hover?: boolean
}>(), {
  align: 'center',
  hover: false,
})

const open = defineModel<boolean>({ default: false })
const root = useTemplateRef<HTMLElement>('root')
const panel = useTemplateRef<HTMLElement>('panel')
const hoverTimer = shallowRef<ReturnType<typeof setTimeout>>()

useDismissableLayer(open, root, { close: () => open.value = false })

function openOnHover() {
  if (!props.hover)
    return
  clearTimeout(hoverTimer.value)
  hoverTimer.value = setTimeout(() => open.value = true, 120)
}

function closeOnHover() {
  if (!props.hover)
    return
  clearTimeout(hoverTimer.value)
  hoverTimer.value = setTimeout(() => open.value = false, 120)
}
</script>

<template>
  <span ref="root" class="relative inline-block" @mouseenter="openOnHover" @mouseleave="closeOnHover">
    <slot name="trigger" :open="open" :toggle="() => open = !open">
      <button class="btn btn-outline" type="button" :aria-expanded="open" @click="open = !open">Open</button>
    </slot>
    <div
      v-if="open"
      ref="panel"
      class="absolute z-40 mt-2 min-w-56 rounded-md border border-border bg-background p-4 text-sm text-foreground shadow-lg"
      :class="align === 'start' ? 'left-0' : align === 'end' ? 'right-0' : 'left-1/2 -translate-x-1/2'"
      role="dialog"
      tabindex="-1"
    >
      <slot :close="() => open = false" />
    </div>
  </span>
</template>
