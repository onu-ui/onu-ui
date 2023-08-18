<script lang="ts" setup>
import { isNumber } from '@onu-ui/utils'
import { badgeProps } from './props'

defineOptions({
  name: 'OBadge',
})
const props = defineProps(badgeProps)
defineSlots<{
  default(props: unknown): any
}>()

const resolveValue = computed(() =>
  props.dot
    ? ''
    : (isNumber(props.value) && props.value > props.max)
        ? `${props.max}+`
        : props.value,
)
</script>

<template>
  <span class="o-badge" o-error v-bind="$attrs">
    <slot />
    <sup
      v-if="resolveValue !== 0 || showZero"
      class="o-badge-sup o-badge-sup-fixed"
      :class="dot && 'o-badge-sup-dot'"
    >{{ resolveValue }}</sup>
  </span>
</template>
