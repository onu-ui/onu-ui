<script setup lang="ts">
import type { ComboboxOption } from './types'
import { computed, shallowRef, useTemplateRef } from 'vue'
import { useDismissableLayer } from '../../composables/useDismissableLayer'

defineOptions({ name: 'Combobox' })

const props = withDefaults(defineProps<{
  options: ComboboxOption[]
  placeholder?: string
  emptyText?: string
  disabled?: boolean
}>(), {
  placeholder: 'Search…',
  emptyText: 'No results',
  disabled: false,
})

const model = defineModel<string>({ default: '' })
const query = shallowRef('')
const open = shallowRef(false)
const activeIndex = shallowRef(0)
const root = useTemplateRef<HTMLElement>('root')
const selected = computed(() => props.options.find(option => option.value === model.value))
const filtered = computed(() => props.options.filter(option => option.label.toLowerCase().includes(query.value.toLowerCase())))

useDismissableLayer(open, root, { close: () => open.value = false })

function select(option: ComboboxOption) {
  if (option.disabled)
    return
  model.value = option.value
  query.value = option.label
  open.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    open.value = true
    if (!filtered.value.length)
      return
    const direction = event.key === 'ArrowDown' ? 1 : -1
    activeIndex.value = (activeIndex.value + direction + filtered.value.length) % filtered.value.length
  }
  else if (event.key === 'Enter' && open.value) {
    event.preventDefault()
    const option = filtered.value[activeIndex.value]
    if (option)
      select(option)
  }
}
</script>

<template>
  <div ref="root" class="relative inline-block min-w-56">
    <input
      v-model="query"
      class="input w-full"
      role="combobox"
      :placeholder="selected?.label ?? placeholder"
      :disabled
      :aria-expanded="open"
      aria-autocomplete="list"
      @focus="open = true"
      @input="activeIndex = 0; open = true"
      @keydown="handleKeydown"
    >
    <ul v-if="open" class="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-background p-1 shadow-lg" role="listbox">
      <li v-if="!filtered.length" class="px-3 py-6 text-center text-sm text-muted-foreground">
        {{ emptyText }}
      </li>
      <li
        v-for="(option, index) in filtered"
        :key="option.value"
        class="cursor-pointer rounded-sm px-3 py-2 text-sm hover:bg-muted aria-selected:bg-muted aria-disabled:pointer-events-none aria-disabled:opacity-50"
        role="option"
        :aria-selected="index === activeIndex"
        :aria-disabled="option.disabled || undefined"
        @pointermove="activeIndex = index"
        @click="select(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
