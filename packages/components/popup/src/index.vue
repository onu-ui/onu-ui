<template>
  <Wrapper ref="wrapperRef" :forward-ref="handleForwardRef" />
</template>

<script setup lang='ts'>
import Wrapper from './wrapper.vue'
import { popupProps } from './props'

const props = defineProps(popupProps)
const emit = defineEmits(['update:visible'])
const triggerEl = ref<HTMLElement>()
const innerVisible = useVModel(props, 'visible', emit, { defaultValue: false })

const handleForwardRef = (ref: HTMLElement) => {
  triggerEl.value = ref
}
</script>

<style>

</style>
