<script lang="ts" setup name="OBadge">
import { isNumber } from '@onu-ui/utils'
import { badgeProps } from './badge'

const props = defineProps(badgeProps)

const resolveValue = computed(() => props.dot
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
