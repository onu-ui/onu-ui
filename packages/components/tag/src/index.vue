<script lang='ts' setup name="OTag">
import OIcon from '../../icon/src/index.vue'
import { tagEmits, tagProps } from './props'

const props = defineProps(tagProps)
const emits = defineEmits(tagEmits)

const handleClose = (evt: MouseEvent) => {
  emits('close', evt)
}

const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}
</script>

<template>
  <span
    class="o-tag-base"
    :o="o"
    :class="[`o-tag-${size}`, closable && 'o-tag-is-closable', light && 'o-tag-light', disabled && 'o-tag-disabled', rounded && 'o-tag-rounded']"
    :style="{ backgroundColor: bgColor }"
    @click="handleClick"
  >
    <span class="o-tag-content">
      <slot />
    </span>

    <o-icon
      v-if="closable"
      class="o-tag-close"
      :class="[!light && 'c-white']"
      name="i-carbon-close"
      @click.stop="handleClose"
    />
  </span>
</template>
