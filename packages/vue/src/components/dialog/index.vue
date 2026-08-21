<script setup lang="ts">
import { computed, useId, useTemplateRef } from 'vue'
import { useDismissableLayer } from '../../composables/useDismissableLayer'

defineOptions({ name: 'OnuDialog' })

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  closeLabel?: string
  persistent?: boolean
}>(), {
  closeLabel: 'Close dialog',
  persistent: false,
})

const open = defineModel<boolean>({ default: false })
const panel = useTemplateRef<HTMLElement>('panel')
const id = useId()
const titleId = computed(() => `${id}-title`)
const descriptionId = computed(() => `${id}-description`)

useDismissableLayer(open, panel, {
  close: () => {
    if (!open.value || props.persistent)
      return
    open.value = false
  },
  modal: true,
})
</script>

<template>
  <slot name="trigger" :open="open" :toggle="() => open = !open" />
  <Teleport to="body">
    <Transition name="onu-dialog">
      <div v-if="open" class="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4" @pointerdown.self.stop="!persistent && (open = false)">
        <section
          ref="panel"
          class="w-full max-w-lg rounded-xl border border-border bg-background p-6 text-foreground shadow-xl outline-none"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title ? titleId : undefined"
          :aria-describedby="description ? descriptionId : undefined"
          tabindex="-1"
        >
          <header v-if="title || description || $slots.header" class="mb-5">
            <slot name="header">
              <h2 v-if="title" :id="titleId" class="text-lg font-semibold">
                {{ title }}
              </h2>
              <p v-if="description" :id="descriptionId" class="mt-1 text-sm text-muted-foreground">
                {{ description }}
              </p>
            </slot>
          </header>
          <slot :close="() => open = false" />
          <footer v-if="$slots.footer" class="mt-6 flex justify-end gap-2">
            <slot name="footer" :close="() => open = false" />
          </footer>
          <button class="absolute right-4 top-4 rounded-sm p-1 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary" type="button" :aria-label="closeLabel" @click="open = false">
            ×
          </button>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.onu-dialog-enter-active,
.onu-dialog-leave-active { transition: opacity 160ms ease; }
.onu-dialog-enter-from,
.onu-dialog-leave-to { opacity: 0; }
</style>
