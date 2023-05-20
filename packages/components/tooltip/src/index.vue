<script setup lang='ts' name="OToolTip">
import type { CSSProperties } from 'vue'
import OTrigger from '../../trigger/src/index'
import { toolTipEmits, toolTipProps } from './props'

const props = defineProps(toolTipProps)
const emit = defineEmits(toolTipEmits)

const _popupVisible = ref(props.defaultPopupVisible)

const computedPopupVisible = computed(
  () => props.popupVisible ?? _popupVisible.value,
)

const computedContentStyle = computed<CSSProperties | undefined>(() => {
  if (props.backgroundColor || props.contentStyle) {
    return {
      backgroundColor: props.backgroundColor,
      ...props.contentStyle,
    }
  }
  return undefined
})

const computedArrowStyle = computed<CSSProperties | undefined>(() => {
  if (props.backgroundColor || props.arrowStyle) {
    return {
      backgroundColor: props.backgroundColor,
      borderColor: props.backgroundColor,
      ...props.arrowStyle,
    }
  }
})

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
    :content-class="['o-trigger-popup-content o-trigger-popup-tooltip', `${type === 'Dark' ? 'o-trigger-popup-darker' : 'o-trigger-popup-lighter'}`, contentClass]"
    :content-style="computedContentStyle"
    :arrow-class="['o-trigger-popup-arrow', `${type === 'Dark' ? 'o-trigger-popup-arrow-darker' : 'o-trigger-popup-arrow-lighter'}`, arrowClass]"
    :arrow-style="computedArrowStyle"
    animation-name="o-fade-in-fade-out"
    auto-fit-transform-origin
    :duration="duration"
    :popup-style="popupStyle"
    :popup-translate="popupTranslate"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <slot />
    <template #content>
      <slot name="content">
        {{ content }}
      </slot>
    </template>
  </OTrigger>
</template>
