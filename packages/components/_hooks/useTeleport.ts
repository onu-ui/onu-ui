import { onMounted, ref, watch } from 'vue'
import { getElement } from '@onu-ui/utils'
import type { Ref } from 'vue'

/**
 *
 * @param param0
 * @returns teleportContainer: mounted Teleport container,containerRef:  popupContainer element
 */
export function useTeleport({
  popupContainer,
  visible,
  defaultContainer = 'body',
  documentContainer,
}: {
  popupContainer: Ref<string | HTMLElement | undefined>
  visible: Ref<boolean>
  defaultContainer?: string
  documentContainer?: boolean
}) {
  const teleportContainer: any = ref(popupContainer.value)
  const containerRef = ref<HTMLElement>()

  const getContainer = () => {
    const element = getElement(popupContainer.value)
    const _teleportContainer = element
      ? popupContainer.value
      : defaultContainer
    const _containerElement
      = element
      ?? (documentContainer
        ? document.documentElement
        : getElement(defaultContainer))
    if (_teleportContainer !== teleportContainer.value)
      teleportContainer.value = _teleportContainer

    if (_containerElement !== containerRef.value)
      containerRef.value = _containerElement
  }

  onMounted(() => getContainer())

  watch(visible, (visible) => {
    if (teleportContainer.value !== popupContainer.value && visible)
      getContainer()
  })

  return {
    teleportContainer,
    containerRef,
  }
}
