<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'Sidebar' })

const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
  width?: string
  collapsedWidth?: string
  label?: string
  fullHeight?: boolean
}>(), {
  side: 'left',
  width: '16rem',
  collapsedWidth: '4rem',
  label: 'Sidebar navigation',
  fullHeight: true,
})

const collapsed = defineModel<boolean>({ default: false })
const style = computed(() => ({ width: collapsed.value ? props.collapsedWidth : props.width }))
</script>

<template>
  <aside class="relative shrink-0 border-border bg-muted/35 o-transition" :class="side === 'left' ? 'border-r' : 'border-l'" :style="style" :aria-label="label">
    <div class="sticky top-0 flex flex-col overflow-hidden p-3" :class="fullHeight ? 'h-screen' : 'h-full'">
      <header class="mb-3 flex items-center" :class="collapsed ? 'justify-center' : 'justify-between'">
        <slot v-if="!collapsed" name="header" />
        <button class="btn btn-ghost btn-sm" type="button" :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'" :aria-expanded="!collapsed" @click="collapsed = !collapsed">
          {{ side === 'left' ? (collapsed ? '›' : '‹') : (collapsed ? '‹' : '›') }}
        </button>
      </header>
      <nav class="min-h-0 flex-1 overflow-y-auto">
        <slot :collapsed="collapsed" />
      </nav>
      <footer v-if="$slots.footer" class="mt-3">
        <slot name="footer" :collapsed="collapsed" />
      </footer>
    </div>
  </aside>
</template>
