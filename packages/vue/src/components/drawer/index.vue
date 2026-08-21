<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { useDismissableLayer } from '../../composables/useDismissableLayer'

defineOptions({ name: 'Drawer' })

const props = withDefaults(defineProps<{
  side?: 'top' | 'right' | 'bottom' | 'left'
  title?: string
  description?: string
}>(), {
  side: 'right',
})

const open = defineModel<boolean>({ default: false })
const panel = useTemplateRef<HTMLElement>('panel')
const position = computed(() => ({
  top: 'left-0 right-0 top-0 max-h-[85vh] rounded-b-xl',
  right: 'bottom-0 right-0 top-0 w-[min(28rem,90vw)]',
  bottom: 'bottom-0 left-0 right-0 max-h-[85vh] rounded-t-xl',
  left: 'bottom-0 left-0 top-0 w-[min(28rem,90vw)]',
}[props.side]))

useDismissableLayer(open, panel, { close: () => open.value = false, modal: true })
</script>

<template>
  <slot name="trigger" :open="open" :toggle="() => open = !open" />
  <Teleport to="body">
    <Transition name="onu-drawer">
      <div v-if="open" class="fixed inset-0 z-50 bg-black/55" @pointerdown.self="open = false">
        <section ref="panel" class="absolute overflow-auto border border-border bg-background p-6 text-foreground shadow-xl outline-none" :class="position" role="dialog" aria-modal="true" tabindex="-1">
          <header v-if="title || description" class="mb-5">
            <h2 v-if="title" class="text-lg font-semibold">
              {{ title }}
            </h2>
            <p v-if="description" class="mt-1 text-sm text-muted-foreground">
              {{ description }}
            </p>
          </header>
          <slot :close="() => open = false" />
          <button class="absolute right-4 top-4 rounded-sm p-1" type="button" aria-label="Close drawer" @click="open = false">
            ×
          </button>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.onu-drawer-enter-active,
.onu-drawer-leave-active { transition: opacity 180ms ease; }
.onu-drawer-enter-from,
.onu-drawer-leave-to { opacity: 0; }
</style>
