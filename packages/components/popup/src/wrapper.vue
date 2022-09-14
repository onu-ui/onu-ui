<template>
  <Fragment>
    <Trigger v-bind="$attrs" ref="triggerRef" @resize="emitResize">
      <slot />
    </Trigger>
    <Teleport :to="getAttach(attach, triggerRef?.$el)">
      <Content @resize="emitResize" @vnode-mounted="emitContentMounted">
        <slot name="content" />
      </Content>
    </Teleport>
  </Fragment>
</template>

<script setup lang='ts'>
import { VNode } from 'vue'
import { getAttach } from '../hooks'
import Trigger from './trigger.vue'
import { wrapperProps } from './props'
import Content from './content.vue'

const props = defineProps(wrapperProps)
const emits = defineEmits(['resize', 'contentMounted'])

const triggerRef = ref<VNode & { $el: HTMLElement }>()
const showContent = ref(false)

const unmounContent = () => {
  showContent.value = false
}
const emitResize = () => {
  emits('resize')
}
const emitContentMounted = () => {
  emits('contentMounted')
}

onMounted(() => {
  requestAnimationFrame(() => {
    showContent.value = props.visible
  })
  props.forwardRef?.(triggerRef.value!.$el)
})

watch(() => props.visible, (visible) => {
  if (visible)
    showContent.value = props.visible
})

defineExpose({
  unmounContent,
  emitResize,
  emitContentMounted,
})
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>
