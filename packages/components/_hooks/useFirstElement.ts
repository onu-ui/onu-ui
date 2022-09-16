import { getFirstElementFromChildren } from '@onu-ui/utils'
import type{ VNode } from 'vue'
export const useFirstElement = () => {
  const children: { value?: VNode[] } = {}
  const firstElement = ref<HTMLElement>()

  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value)
    if (element !== firstElement.value)
      firstElement.value = element
  }

  onMounted(() => getFirstElement())
  onUpdated(() => getFirstElement())

  return {
    children,
    firstElement,
  }
}
