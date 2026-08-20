import type { Ref } from 'vue'
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'

export interface DismissableLayerOptions {
  close: () => void
  modal?: boolean
}

export function useDismissableLayer(open: Ref<boolean>, layer: Ref<HTMLElement | null>, options: DismissableLayerOptions) {
  let trigger: HTMLElement | null = null

  function onKeydown(event: KeyboardEvent) {
    if (!open.value)
      return
    if (event.key === 'Escape') {
      event.preventDefault()
      options.close()
      return
    }
    if (event.key !== 'Tab' || !options.modal || !layer.value)
      return

    const focusable = Array.from(layer.value.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (!focusable.length) {
      event.preventDefault()
      layer.value.focus()
      return
    }
    const first = focusable[0]
    const last = focusable.at(-1)!
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    }
    else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  function onPointerdown(event: PointerEvent) {
    if (open.value && layer.value && !layer.value.contains(event.target as Node))
      options.close()
  }

  onMounted(() => {
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('pointerdown', onPointerdown)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('pointerdown', onPointerdown)
  })

  watch(open, async (value) => {
    if (value) {
      trigger = document.activeElement as HTMLElement | null
      await nextTick()
      const target = layer.value?.querySelector<HTMLElement>('[autofocus]') ?? layer.value?.querySelector<HTMLElement>(FOCUSABLE) ?? layer.value
      target?.focus()
    }
    else {
      trigger?.focus()
    }
  })
}
