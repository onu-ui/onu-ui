import { shallowReactive } from 'vue'
import type { MessageContext } from './type'

export const instances: MessageContext[] = shallowReactive([])

export function getInstance(id: string) {
  const idx = instances.findIndex((item) => {
    return item.id === id
  })
  const current = instances[idx]
  let prev: MessageContext | undefined
  if (idx > 0)
    prev = instances[idx - 1]
  return { current, prev }
}

export function useOffset(id: string): number {
  const { prev } = getInstance(id)

  if (!prev)
    return 0
  return prev.vm.exposed!.bottom.value
}
