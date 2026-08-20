<script setup lang="ts">
import type { AccordionItem } from './types'
import { computed } from 'vue'

defineOptions({ name: 'OAccordion' })

const props = withDefaults(defineProps<{
  items: AccordionItem[]
  multiple?: boolean
  collapsible?: boolean
}>(), {
  multiple: false,
  collapsible: true,
})

const model = defineModel<string | string[]>({ default: '' })
const opened = computed(() => new Set(Array.isArray(model.value) ? model.value : [model.value].filter(Boolean)))

function toggle(value: string) {
  if (props.multiple) {
    const next = new Set(opened.value)
    next.has(value) ? next.delete(value) : next.add(value)
    model.value = [...next]
    return
  }

  model.value = opened.value.has(value) && props.collapsible ? '' : value
}
</script>

<template>
  <div class="w-full divide-y divide-border border-y border-border">
    <section v-for="item in items" :key="item.value">
      <h3>
        <button
          class="w-full flex items-center justify-between gap-4 py-4 text-left font-medium disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          :disabled="item.disabled"
          :aria-expanded="opened.has(item.value)"
          :aria-controls="`${item.value}-panel`"
          @click="toggle(item.value)"
        >
          <slot name="trigger" :item="item" :open="opened.has(item.value)">
            {{ item.label }}
          </slot>
          <span class="o-transition" :class="opened.has(item.value) && 'rotate-180'" aria-hidden="true">⌄</span>
        </button>
      </h3>
      <div
        v-show="opened.has(item.value)"
        :id="`${item.value}-panel`"
        class="pb-4 text-sm text-muted-foreground"
        role="region"
      >
        <slot name="content" :item="item">
          {{ item.content }}
        </slot>
      </div>
    </section>
  </div>
</template>
