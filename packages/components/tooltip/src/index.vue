<script setup lang='ts' name="OToolTip">
import OTrigger from '../../trigger/src/index'
import { toolTipEmits, toolTipProps } from './props'

const props = defineProps(toolTipProps)
const emit = defineEmits(toolTipEmits)

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
  <OTrigger
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
      <slot name="content">
        {{ content }}
      </slot>
    </template>
  </OTrigger>
</template>
