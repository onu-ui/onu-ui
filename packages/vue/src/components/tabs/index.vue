<script setup lang="ts">
import type { TabItem } from './types'
import { computed, useTemplateRef } from 'vue'

defineOptions({ name: 'OTabs' })

const props = withDefaults(defineProps<{
  items: TabItem[]
  orientation?: 'horizontal' | 'vertical'
}>(), {
  orientation: 'horizontal',
})

const model = defineModel<string>()
const triggers = useTemplateRef<HTMLButtonElement[]>('triggers')
const selected = computed(() => model.value ?? props.items.find(item => !item.disabled)?.value)

function select(value: string) {
  model.value = value
}

function handleKeydown(event: KeyboardEvent, index: number) {
  const forward = props.orientation === 'horizontal' ? event.key === 'ArrowRight' : event.key === 'ArrowDown'
  const backward = props.orientation === 'horizontal' ? event.key === 'ArrowLeft' : event.key === 'ArrowUp'
  if (!forward && !backward && event.key !== 'Home' && event.key !== 'End')
    return

  event.preventDefault()
  const enabled = props.items.map((item, itemIndex) => ({ item, itemIndex })).filter(({ item }) => !item.disabled)
  const current = enabled.findIndex(entry => entry.itemIndex === index)
  const next = event.key === 'Home' ? enabled[0] : event.key === 'End' ? enabled.at(-1) : enabled[(current + (forward ? 1 : -1) + enabled.length) % enabled.length]
  if (next) {
    select(next.item.value)
    triggers.value?.[next.itemIndex]?.focus()
  }
}
</script>

<template>
  <div :class="orientation === 'vertical' && 'flex gap-4'">
    <div
      class="inline-flex rounded-md bg-muted p-1"
      :class="orientation === 'vertical' ? 'flex-col' : 'items-center'"
      role="tablist"
      :aria-orientation="orientation"
    >
      <button
        v-for="(item, index) in items"
        :id="`${item.value}-tab`"
        :key="item.value"
        ref="triggers"
        class="rounded-sm px-3 py-1.5 text-sm font-medium o-transition disabled:opacity-50"
        :class="selected === item.value && 'bg-background text-foreground shadow-sm'"
        role="tab"
        type="button"
        :tabindex="selected === item.value ? 0 : -1"
        :aria-selected="selected === item.value"
        :aria-controls="`${item.value}-panel`"
        :disabled="item.disabled"
        @click="select(item.value)"
        @keydown="handleKeydown($event, index)"
      >
        {{ item.label }}
      </button>
    </div>
    <div v-for="item in items" v-show="selected === item.value" :id="`${item.value}-panel`" :key="item.value" class="mt-3" role="tabpanel" :aria-labelledby="`${item.value}-tab`">
      <slot :name="item.value" :item="item">
        {{ item.content }}
      </slot>
    </div>
  </div>
</template>
