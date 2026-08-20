<script setup lang="ts">
import type { ToggleGroupItem } from './types'
import { computed } from 'vue'

defineOptions({ name: 'OToggleGroup' })

const props = withDefaults(defineProps<{
  items: ToggleGroupItem[]
  multiple?: boolean
  ariaLabel?: string
}>(), {
  multiple: false,
  ariaLabel: 'Toggle options',
})

const model = defineModel<string | string[]>({ default: '' })
const selected = computed(() => new Set(Array.isArray(model.value) ? model.value : [model.value].filter(Boolean)))

function toggle(value: string) {
  if (!props.multiple) {
    model.value = selected.value.has(value) ? '' : value
    return
  }

  const next = new Set(selected.value)
  next.has(value) ? next.delete(value) : next.add(value)
  model.value = [...next]
}
</script>

<template>
  <div class="inline-flex rounded-md border border-border p-1" role="group" :aria-label="ariaLabel">
    <button
      v-for="item in items"
      :key="item.value"
      class="rounded-sm px-3 py-1.5 text-sm o-transition disabled:opacity-50"
      :class="selected.has(item.value) && 'bg-primary text-primary-foreground'"
      type="button"
      :disabled="item.disabled"
      :aria-pressed="selected.has(item.value)"
      @click="toggle(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
