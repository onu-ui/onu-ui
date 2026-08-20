<script setup lang="ts">
import type { CommandItem } from './types'
import { computed, shallowRef } from 'vue'

defineOptions({ name: 'OCommand' })

const props = withDefaults(defineProps<{
  items: CommandItem[]
  placeholder?: string
  emptyText?: string
}>(), {
  placeholder: 'Type a command or search…',
  emptyText: 'No results found.',
})

const emit = defineEmits<{ select: [item: CommandItem] }>()
const query = defineModel<string>('query', { default: '' })
const activeIndex = shallowRef(0)
const filtered = computed(() => {
  const needle = query.value.trim().toLowerCase()
  return props.items.filter(item => !needle || [item.label, item.value, ...(item.keywords ?? [])].some(value => value.toLowerCase().includes(needle)))
})

function choose(item: CommandItem) {
  if (!item.disabled)
    emit('select', item)
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    if (!filtered.value.length)
      return
    activeIndex.value = (activeIndex.value + (event.key === 'ArrowDown' ? 1 : -1) + filtered.value.length) % filtered.value.length
  }
  else if (event.key === 'Enter') {
    const item = filtered.value[activeIndex.value]
    if (item) {
      event.preventDefault()
      choose(item)
    }
  }
}
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-border bg-background shadow-sm" role="application" @keydown="handleKeydown">
    <input v-model="query" class="w-full border-b border-border bg-transparent px-4 py-3 outline-none" :placeholder autofocus @input="activeIndex = 0">
    <div class="max-h-72 overflow-auto p-1" role="listbox">
      <p v-if="!filtered.length" class="px-3 py-8 text-center text-sm text-muted-foreground">
        {{ emptyText }}
      </p>
      <button
        v-for="(item, index) in filtered"
        :key="item.value"
        class="w-full flex items-center justify-between rounded-sm px-3 py-2 text-left text-sm aria-selected:bg-muted disabled:opacity-50"
        role="option"
        type="button"
        :disabled="item.disabled"
        :aria-selected="activeIndex === index"
        @pointermove="activeIndex = index"
        @click="choose(item)"
      >
        <slot name="item" :item="item">
          {{ item.label }}
        </slot>
        <span v-if="item.group" class="text-xs text-muted-foreground">{{ item.group }}</span>
      </button>
    </div>
  </div>
</template>
