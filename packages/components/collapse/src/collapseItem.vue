<script setup lang="ts" name="OCollapseItem">
// TODO test
import { computed, inject } from 'vue'

import OIcon from '../../icon/src/index.vue'
import type { RendererElement } from './props'
import { collapseContextKey, collapseItemProps } from './props'

const props = defineProps(collapseItemProps)
const collapse = inject(collapseContextKey)

const isActive = computed(() =>
  collapse?.activeNames.value.includes(props.name),
)
const leftArrow = computed(() => props.arrowPlacement === 'left')
const rightArrow = computed(() => props.arrowPlacement === 'right')

function handleHeaderClick() {
  !props.disabled && collapse?.toggleItem(props.name)
}

const on = {
  beforeEnter(el: RendererElement) {
    el.style.maxHeight = 0
  },

  enter(el: RendererElement) {
    if (el.scrollHeight !== 0)
      el.style.maxHeight = `${el.scrollHeight}px`
    else
      el.style.maxHeight = 0
  },

  afterEnter(el: RendererElement) {
    el.style.maxHeight = ''
  },

  beforeLeave(el: RendererElement) {
    el.style.maxHeight = `${el.scrollHeight}px`
  },

  leave(el: RendererElement) {
    if (el.scrollHeight !== 0)
      el.style.maxHeight = 0
  },

  afterLeave(el: RendererElement) {
    el.style.maxHeight = ''
  },
}

defineExpose({
  isActive,
})
</script>

<template>
  <div o-collapse-item-base>
    <div o-collapse-item-wrap :class="[props.disabled && 'o-collapse-item-wrap-active', props.disabled && 'o-disabled']">
      <div
        class="o-collapse-item-title" :class="[
          rightArrow && 'o-collapse-item-title-arrow-right',
        ]" @click="handleHeaderClick"
      >
        <div o-collapse-item-title-left>
          <div
            v-if="leftArrow" o-collapse-item-title-arrow-base :class="[
              isActive && 'rotate-90',
            ]"
          >
            <div i-carbon-chevron-right text-base />
          </div>
          <div v-if="props.icon">
            <slot name="icon">
              <OIcon :name="props.icon" />
            </slot>
          </div>
          <slot name="title">
            {{ props.title }}
          </slot>
        </div>
        <div
          v-if="rightArrow" o-collapse-item-title-arrow-base :class="[
            isActive && 'rotate-90',
          ]"
        >
          <div i-carbon-chevron-right text-base />
        </div>
      </div>
      <Transition v-on="on">
        <div v-show="isActive" o-collapse-item-content-wrap>
          <div o-collapse-item-content>
            <slot />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.v-leave-active,
.v-enter-active {
  transition: 300ms max-height ease-in-out,
    300ms padding-top ease-in-out,
    300ms padding-bottom ease-in-out;
}
</style>
