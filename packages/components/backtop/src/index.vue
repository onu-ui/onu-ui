<script setup lang="ts">
import { backtopEmits, backtopProps } from './props'
import { useBackTop } from './useBacktop'

defineOptions({
  name: 'OBacktop',
})
const props = defineProps(backtopProps)
const emit = defineEmits(backtopEmits)
defineSlots<{
  default(props: unknown): any
}>()

const { handleClick, visible } = useBackTop(props, emit, 'OBacktop')

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))
</script>

<template>
  <transition>
    <div
      v-if="visible"
      :style="backTopStyle"
      class="fixed bg-blue-500 shadow-lg shadow-context:50 w-40px h-40px rounded-1/2 flex justify-center items-center text-20px cursor-pointer z-5 hover:bg-blue-400"
      @click.stop="handleClick"
    >
      <slot>
        <div i-carbon-up-to-top class="!c-white" />
      </slot>
    </div>
  </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
