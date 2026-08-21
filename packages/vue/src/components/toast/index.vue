<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'

defineOptions({ name: 'Toast' })

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  duration?: number
  variant?: 'default' | 'success' | 'warning' | 'destructive'
}>(), {
  duration: 5000,
  variant: 'default',
})

const open = defineModel<boolean>({ default: false })
let timer: ReturnType<typeof setTimeout> | undefined

function schedule() {
  clearTimeout(timer)
  if (open.value && props.duration > 0)
    timer = setTimeout(() => open.value = false, props.duration)
}

function pause() {
  clearTimeout(timer)
}

watch(() => [open.value, props.duration], schedule, { immediate: true })
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <Teleport to="body">
    <Transition name="onu-toast">
      <aside
        v-if="open"
        class="fixed bottom-5 right-5 z-[60] w-[min(24rem,calc(100vw-2.5rem))] rounded-lg border border-border bg-background p-4 text-foreground shadow-xl"
        :class="{
          'border-green-500/50': variant === 'success',
          'border-amber-500/50': variant === 'warning',
          'border-red-500/50': variant === 'destructive',
        }"
        role="status"
        aria-live="polite"
        @mouseenter="pause"
        @mouseleave="schedule"
      >
        <div class="pr-7">
          <strong v-if="title" class="text-sm">{{ title }}</strong>
          <p v-if="description" class="mt-1 text-sm text-muted-foreground">
            {{ description }}
          </p>
          <slot />
        </div>
        <button class="absolute right-3 top-3 rounded-sm p-1" type="button" aria-label="Dismiss notification" @click="open = false">
          ×
        </button>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.onu-toast-enter-active,
.onu-toast-leave-active { transition: opacity 180ms ease, transform 180ms ease; }
.onu-toast-enter-from,
.onu-toast-leave-to { opacity: 0; transform: translateY(12px); }
</style>
