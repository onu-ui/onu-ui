<script lang='ts' setup name="OTag">
import OIcon from '../../icon/src/index.vue'
import { tagEmits, tagProps } from './props'

defineProps(tagProps)
const emits = defineEmits(tagEmits)

function handleClose(evt: MouseEvent) {
  emits('close', evt)
}

function handleClick(evt: MouseEvent) {
  emits('click', evt)
}
</script>

<template>
  <span
    class="o-tag-base"
    :class="[`o-tag-${size}`, closable && 'o-tag-is-closable', light && 'o-tag-light', disabled && 'o-tag-disabled', rounded && 'o-tag-rounded', type && `o-${type}`]"
    :style="{ backgroundColor: bgColor }"
    @click="handleClick"
  >
    <span class="o-tag-content">
      <slot />
    </span>

    <OIcon
      v-if="closable"
      class="o-tag-close"
      :class="[!light && 'c-white']"
      name="i-carbon-close"
      @click.stop="handleClose"
    />
  </span>
</template>
