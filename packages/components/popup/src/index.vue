<script setup lang='ts' name="OPopup">
import OTrigger from '../../trigger/src/index'
import { popupEmits, popupProps } from './props'

const props = defineProps(popupProps)
const emit = defineEmits(popupEmits)

const _popupVisible = ref(props.defaultPopupVisible)
const computedPopupVisible = computed(
  () => props.popupVisible ?? _popupVisible.value,
)

function handlePopupVisibleChange(visible: boolean) {
  _popupVisible.value = visible
  emit('update:popupVisible', visible)
  emit('popupVisibleChange', visible)
}
</script>

<template>
  <OTrigger
    :trigger="trigger"
    :position="position"
    :popup-container="popupContainer"
    :popup-visible="computedPopupVisible"
    :update-at-scroll="updateAtScroll"
    show-arrow
    :popup-offset="10"
    :content-class="['o-trigger-popup-content', contentClass]"
    :content-style="contentStyle"
    :arrow-class="['o-trigger-popup-arrow', arrowClass]"
    :arrow-style="arrowStyle"
    animation-name="o-fade-in-fade-out"
    auto-fit-transform-origin
    :duration="duration"
    :popup-style="popupStyle"
    :popup-translate="popupTranslate"
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
  </OTrigger>
</template>
