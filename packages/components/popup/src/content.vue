<template>
  <div ref="el" class="top-0 left-0 absolute w-full">
    <slot />
  </div>
</template>

<script setup lang='ts'>
import { useObserverResize } from '../hooks'

const emits = defineEmits(['resize'])
const el = ref()
useObserverResize(() => el.value.children[0], () => {
  emits('resize')
})
</script>
