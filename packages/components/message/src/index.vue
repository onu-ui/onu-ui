<script setup lang="ts" name="OMessage">
import { CSSProperties, computed, onMounted, ref } from 'vue'
import { useResizeObserver, useTimeoutFn } from '@vueuse/core'
import OIcon from '../../icon/src/index.vue'
import { messageEmits, messageProps } from './type'
import { useOffset } from './instance'

const props = defineProps(messageProps)
defineEmits(messageEmits)

let stopTimer: () => void
// init muse be false to `enter-from` animation
const visible = ref(false)
const height = ref(0)
const messageRef = ref<HTMLDivElement>()

function startTimer() {
  if (props.duration === 0) return
  const { stop } = useTimeoutFn(() => {
    close()
  }, props.duration)
  stopTimer = stop
}

function close() {
  visible.value = false
}

const lastOffset = computed(() => useOffset(props.id))
const currentOffset = computed(() => props.offset + lastOffset.value)
const bottom = computed((): number => height.value + currentOffset.value)

const customStyle = computed<CSSProperties>(() => ({
  top: `${currentOffset.value}px`,
  zIndex: props.zIndex,
}))

onMounted(() => {
  startTimer()
  visible.value = true
})

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height
})

defineExpose({
  visible,
  close,
  bottom,
})
function handleToClosable() {
  close()
}

const iconTypeMap = {
  primary: 'o-message-icon-primary',
  secondary: 'o-message-icon-secondary',
  success: 'o-message-icon-success',
  warning: 'o-message-icon-warning',
  error: 'o-message-icon-error',
  info: 'o-message-icon-info',
}
</script>

<template>
  <!-- <Teleport :to="props.appendTo"> -->
  <Transition name="fade" :o="props.type" @after-leave="$emit('destroy')">
    <div v-show="visible" :id="id" ref="messageRef" o-message-base :style="customStyle">
      <div o-message-content>
        <o-icon text-xl :name="props.icon ?? iconTypeMap[props.type]" :class="type === 'info' && '!text-info !dark:text-secondary'" />
        <slot>
          <p v-if="!parseHtml">
            {{ content }}
          </p>
          <p v-else v-html="content" />
        </slot>
      </div>

      <div class="o-message-closable" @click="handleToClosable">
        <div v-if="props.closable">
          <o-icon name="i-carbon-close" class="text-xl text-darkContext dark:text-lightContext font-semibold" />
        </div>
      </div>
    </div>
  </Transition>
  <!-- </Teleport> -->
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
