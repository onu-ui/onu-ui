<script setup lang='tsx'>
import { Text } from 'vue'
import { filterEmpty, observeResize } from '../hooks'

const emits = defineEmits(['resize'])
const cleanOR = ref<ReturnType<typeof observeResize>>()
const children = filterEmpty(useSlots().default as any)

onMounted(() => {
  const root: any = getCurrentInstance()!
  cleanOR.value = observeResize(root, () => {
    emits('resize')
  })
})

onUnmounted(() => {
  cleanOR.value?.()
})

const child = () => {
  if (children.length > 1 || children[0].type === Text)
    return <span>{children}</span>
  return children[0]
}
</script>

<template>
  <child />
</template>
