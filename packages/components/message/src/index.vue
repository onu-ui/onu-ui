<script setup lang="ts">
// TODO to test
import { onMounted, ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'

import OIcon from '../../icon/src/index.vue'
import { messageEmits, messageProps } from './type'

const props = defineProps(messageProps)
defineEmits(messageEmits)

let stopTimer: () => void
// init muse be false to `enter-from` animation
const visible = ref(false)

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

onMounted(() => {
  startTimer()
  visible.value = true
})
defineExpose({
  visible,
  close,
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
  <Transition
    name="fade"
    :o="props.type"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      o-message-base
    >
      <div
        o-message-content
      >
        <o-icon
          :name="props.icon ?? iconTypeMap[props.type]"
          class="!text-white"
        />
        <p>{{ props.content }}</p>
      </div>

      <div class="o-message-closable" @click="handleToClosable">
        <div
          v-if="props.closable"
        >
          <o-icon name="i-carbon-close" class="!text-white text-xl" />
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