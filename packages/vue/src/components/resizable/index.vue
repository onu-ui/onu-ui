<script setup lang="ts">
import { computed, onBeforeUnmount, shallowRef } from 'vue'

defineOptions({ name: 'OResizable' })

const props = withDefaults(defineProps<{
  direction?: 'horizontal' | 'vertical'
  min?: number
  max?: number
}>(), {
  direction: 'horizontal',
  min: 20,
  max: 80,
})

const model = defineModel<number>({ default: 50 })
const dragging = shallowRef(false)
let rootRect: DOMRect | undefined
const rootStyle = computed(() => props.direction === 'horizontal'
  ? { gridTemplateColumns: `${model.value}% 6px 1fr` }
  : { gridTemplateRows: `${model.value}% 6px 1fr` })

function start(event: PointerEvent) {
  dragging.value = true
  rootRect = (event.currentTarget as HTMLElement).parentElement?.getBoundingClientRect()
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', stop, { once: true })
}

function move(event: PointerEvent) {
  if (!dragging.value || !rootRect)
    return
  const percent = props.direction === 'horizontal' ? (event.clientX - rootRect.left) / rootRect.width * 100 : (event.clientY - rootRect.top) / rootRect.height * 100
  model.value = Math.min(props.max, Math.max(props.min, percent))
}

function stop() {
  dragging.value = false
  rootRect = undefined
  window.removeEventListener('pointermove', move)
}

function handleKeydown(event: KeyboardEvent) {
  const negative = event.key === (props.direction === 'horizontal' ? 'ArrowLeft' : 'ArrowUp')
  const positive = event.key === (props.direction === 'horizontal' ? 'ArrowRight' : 'ArrowDown')
  if (!negative && !positive)
    return
  event.preventDefault()
  model.value = Math.min(props.max, Math.max(props.min, model.value + (positive ? 2 : -2)))
}

onBeforeUnmount(stop)
</script>

<template>
  <div class="grid min-h-40 overflow-hidden rounded-lg border border-border" :style="rootStyle">
    <div class="overflow-auto">
      <slot name="first" />
    </div>
    <button
      class="bg-border hover:bg-primary focus:bg-primary focus:outline-none"
      :class="direction === 'horizontal' ? 'cursor-col-resize' : 'cursor-row-resize'"
      type="button"
      role="separator"
      :aria-orientation="direction"
      :aria-valuenow="Math.round(model)"
      :aria-valuemin="min"
      :aria-valuemax="max"
      @pointerdown="start"
      @keydown="handleKeydown"
    />
    <div class="overflow-auto">
      <slot name="second" />
    </div>
  </div>
</template>
