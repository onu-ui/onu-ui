
<script setup lang='ts' name="OPopup">
import OTrigger from '../../trigger/src/index'
import { popupEmits, popupProps } from './props'

const props = defineProps(popupProps)
const emit = defineEmits(popupEmits)

const _popupVisible = ref(props.defaultPopupVisible)
const computedPopupVisible = computed(
  () => props.popupVisible ?? _popupVisible.value,
)

const handlePopupVisibleChange = (visible: boolean) => {
  _popupVisible.value = visible
  emit('update:popupVisible', visible)
  emit('popupVisibleChange', visible)
}
</script>

<template>
  <o-trigger
    :trigger="trigger"
    :position="position"
    :popup-container="popupContainer"
    :popup-visible="computedPopupVisible"
    show-arrow
    :popup-offset="10"
    :content-class="['o-trigger-popup-content', contentClass]"
    :content-style="contentStyle"
    :arrow-class="['o-trigger-popup-arrow', arrowClass]"
    :arrow-style="arrowStyle"
    animation-name="o-fade-in-fade-out"
    auto-fit-transform-origin
    @popup-visible-change="handlePopupVisibleChange"
  >
    <slot />
    <template #content>
      <div class="o-popup-title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="o-popup-content">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </template>
  </o-trigger>
</template>
