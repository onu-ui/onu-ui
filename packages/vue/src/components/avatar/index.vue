<script lang='ts' setup>
import { computed, useAttrs, useSlots } from 'vue'
import { avatarProps } from './props'
import type { SizeType } from '@/composables/useProps'

defineOptions({
  name: 'OAvatar',
  inheritAttrs: false,
})

const props = defineProps(avatarProps)
const binds = Object.assign({}, useAttrs())
const slots = useSlots()

const sizeMap: Record<SizeType, string> = {
  xs: 'avatar-xs',
  sm: 'avatar-sm',
  md: 'avatar-md',
  lg: 'avatar-lg',
}

const variants = {
  hexagon: 'mask-hexagon',
  squircle: 'mask-squircle',
  triangle: 'mask-triangle',
}

const base = computed(() => [
  'avatar',
  props.size ? sizeMap[props.size] : '',
  props.variant ? variants[props.variant] : '',
  slots.default && !props.src ? 'avatar-placeholder' : '',
])

</script>

<template>
  <div :class="base">
    <div v-bind="binds">
      <img v-if="src" :src>
      <slot v-else />
    </div>
  </div>
</template>
