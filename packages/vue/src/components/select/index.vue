<script setup lang="ts">
import type { SelectOption } from './types'
import { computed, shallowRef, useTemplateRef } from 'vue'
import { useDismissableLayer } from '../../composables/useDismissableLayer'

defineOptions({ name: 'OSelect' })

const props = withDefaults(defineProps<{
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
  name?: string
}>(), {
  placeholder: 'Select an option',
  disabled: false,
})

const model = defineModel<string | number>()
const open = shallowRef(false)
const root = useTemplateRef<HTMLElement>('root')
const selected = computed(() => props.options.find(option => option.value === model.value))

useDismissableLayer(open, root, { close: () => open.value = false })

function select(option: SelectOption) {
  if (option.disabled)
    return
  model.value = option.value
  open.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key))
    return
  event.preventDefault()
  const enabled = props.options.filter(option => !option.disabled)
  const current = enabled.findIndex(option => option.value === model.value)
  const index = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + enabled.length) % enabled.length
  const option = enabled[index]
  if (option)
    model.value = option.value
}
</script>

<template>
  <div ref="root" class="relative inline-block min-w-48">
    <input v-if="name" type="hidden" :name :value="model">
    <button
      class="input w-full justify-between text-left"
      type="button"
      :disabled
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click="open = !open"
      @keydown="handleKeydown"
    >
      <span :class="!selected && 'text-muted-foreground'">{{ selected?.label ?? placeholder }}</span>
      <span aria-hidden="true">⌄</span>
    </button>
    <ul v-if="open" class="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-background p-1 shadow-lg" role="listbox">
      <li
        v-for="option in options"
        :key="`${typeof option.value}:${String(option.value)}`"
        class="cursor-pointer rounded-sm px-3 py-2 text-sm hover:bg-muted aria-selected:bg-muted aria-disabled:pointer-events-none aria-disabled:opacity-50"
        role="option"
        :aria-selected="option.value === model"
        :aria-disabled="option.disabled || undefined"
        @click="select(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
