<script setup lang="ts">
import type { MenuItem } from './types'
import { shallowRef, useTemplateRef } from 'vue'
import { useDismissableLayer } from '../../composables/useDismissableLayer'

defineOptions({ name: 'DropdownMenu' })

const props = defineProps<{
  items: MenuItem[]
  context?: boolean
}>()
const emit = defineEmits<{ select: [item: MenuItem] }>()
const open = defineModel<boolean>({ default: false })
const activeIndex = shallowRef(0)
const root = useTemplateRef<HTMLElement>('root')
const menu = useTemplateRef<HTMLElement>('menu')

useDismissableLayer(open, root, { close: () => open.value = false })

function choose(item: MenuItem) {
  if (item.disabled)
    return
  emit('select', item)
  open.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    const enabled = props.items.map((item, index) => ({ item, index })).filter(({ item }) => !item.disabled)
    const current = enabled.findIndex(entry => entry.index === activeIndex.value)
    const next = enabled[(current + (event.key === 'ArrowDown' ? 1 : -1) + enabled.length) % enabled.length]
    if (next)
      activeIndex.value = next.index
  }
  else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    const item = props.items[activeIndex.value]
    if (item)
      choose(item)
  }
}
</script>

<template>
  <span ref="root" class="relative inline-block" @contextmenu.prevent="context && (open = true)">
    <slot name="trigger" :open="open" :toggle="() => open = !open">
      <button class="btn btn-outline" type="button" aria-haspopup="menu" :aria-expanded="open" @click="open = !open">Menu</button>
    </slot>
    <div v-if="open" ref="menu" class="absolute right-0 z-40 mt-2 min-w-44 rounded-md border border-border bg-background p-1 shadow-lg" role="menu" tabindex="-1" @keydown="handleKeydown">
      <button
        v-for="(item, index) in items"
        :key="item.value"
        class="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-muted focus:bg-muted disabled:opacity-50"
        :class="item.destructive && 'text-red-600'"
        role="menuitem"
        type="button"
        :disabled="item.disabled"
        @focus="activeIndex = index"
        @click="choose(item)"
      >
        {{ item.label }}
      </button>
    </div>
  </span>
</template>
