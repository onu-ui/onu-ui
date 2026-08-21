<script setup lang="ts">
import { computed, nextTick, useTemplateRef } from 'vue'

defineOptions({ name: 'Carousel' })

const props = withDefaults(defineProps<{
  items: unknown[]
  loop?: boolean
  ariaLabel?: string
}>(), {
  loop: false,
  ariaLabel: 'Carousel',
})

const model = defineModel<number>({ default: 0 })
const viewport = useTemplateRef<HTMLElement>('viewport')
const canPrevious = computed(() => props.loop || model.value > 0)
const canNext = computed(() => props.loop || model.value < props.items.length - 1)

async function go(index: number) {
  if (!props.items.length)
    return
  model.value = props.loop ? (index + props.items.length) % props.items.length : Math.min(Math.max(index, 0), props.items.length - 1)
  await nextTick()
  viewport.value?.children[model.value]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}
</script>

<template>
  <section class="relative" role="region" aria-roledescription="carousel" :aria-label="ariaLabel">
    <div ref="viewport" class="flex snap-x snap-mandatory overflow-hidden rounded-lg" tabindex="0" @keydown.left="go(model - 1)" @keydown.right="go(model + 1)">
      <article v-for="(item, index) in items" :key="index" class="min-w-full snap-start" role="group" aria-roledescription="slide" :aria-label="`${index + 1} of ${items.length}`">
        <slot :item="item" :index="index">
          {{ item }}
        </slot>
      </article>
    </div>
    <button class="btn btn-outline btn-sm absolute left-2 top-1/2 -translate-y-1/2" type="button" aria-label="Previous slide" :disabled="!canPrevious" @click="go(model - 1)">
      ‹
    </button>
    <button class="btn btn-outline btn-sm absolute right-2 top-1/2 -translate-y-1/2" type="button" aria-label="Next slide" :disabled="!canNext" @click="go(model + 1)">
      ›
    </button>
  </section>
</template>
