import { getFirstElementFromChildren } from '@onu-ui/utils'
import type { VNode } from 'vue'

export function useFirstElement() {
  const children: { value?: VNode[] } = {}
  const firstElement = ref<HTMLElement>()

  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value as any)

    if (element !== firstElement.value && (element instanceof HTMLElement))
      firstElement.value = element
  }

  onMounted(() => getFirstElement())
  onUpdated(() => getFirstElement())

  return {
    children,
    firstElement,
  }
}
