<script setup lang="ts" name="ODialog">
import './transition.css'
import { onKeyDown, useScrollLock } from '@vueuse/core'
import type { CSSProperties } from 'vue'
import ClientOnly from './../../_components/ClientOnly.vue'
import { dialogEmits, dialogProps } from './props'
import { isNumber } from './../../../utils/shared/is'
const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const el = ref<HTMLElement | null>(document.body)
const isLocked = useScrollLock(el)

const handleCancel = () => {
  emit('update:visible', false)
  emit('cancel')
}
const handleOk = async () => {
  emit('ok')
}
const mergedDialogStyle = computed(() => {
  const style: CSSProperties = {
    ...(props.dialogStyle ?? {}),
  }
  if (props.width)
    style.width = isNumber(props.width) ? `${props.width}px` : props.width

  if (props.top)
    style.marginTop = isNumber(props.top) ? `${props.top}px` : props.top

  return style
})

let unbind

watch(() => props.visible, () => {
  if (props.visible) {
    isLocked.value = true
    if (props.escToClose)
      unbind = onKeyDown('Escape', () => handleCancel())
  }
  else {
    isLocked.value = false
    unbind && unbind()
  }
}, {
  immediate: true,
})

onBeforeUnmount(() => {
  isLocked.value = false
  unbind && unbind()
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body" :disabled="!appendToBody">
      <div v-if="!destroyOnClose || visible" v-show="visible" class="o-dialog-root" :style="{ zIndex }" v-bind="$attrs">
        <Transition :name="maskAnimationName" appear>
          <div v-if="showMask" v-show="visible" class="o-dialog-mask" :style="maskStyle" />
        </Transition>
        <div class="o-dialog-wrapper" @click.self="maskClosable && handleCancel()">
          <Transition :name="dialogAnimationName" appear>
            <div v-show="visible" class="o-dialog" :class="[dialogClass]" :style="mergedDialogStyle">
              <div v-if="$slots.title || title || showClose" class="o-dialog-header">
                <h4

                  class="o-dialog-header-title"
                >
                  <template v-if="$slots.title || title">
                    <slot name="title">
                      {{ title }}
                    </slot>
                  </template>
                </h4>
                <div
                  v-if="showClose"
                  class="o-dialog-header-close" tabindex="-1" role="button" aria-label="Close" @click="handleCancel"
                >
                  <o-icon name="i-carbon-close" />
                </div>
              </div>
              <div class="o-dialog-body" :class="[bodyClass]" :style="bodyStyle">
                <slot />
              </div>
              <div v-if="showFooter" class="o-dialog-footer">
                <slot name="footer">
                  <o-button v-if="!hideCancel" v-bind="cancelProps" @click="handleCancel">
                    {{ cancelText }}
                  </o-button>
                  <o-button type="primary" v-bind="okProps" :loading="okLoading" @click="handleOk">
                    {{ okText }}
                  </o-button>
                </slot>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style lang='scss' scoped></style>
