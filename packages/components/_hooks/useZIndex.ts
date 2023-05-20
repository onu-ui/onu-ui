const zIndex = ref(0)

export function useZindex() {
  // TODO: After Theme config done
  const initialZIndex = ref(2000)
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}
