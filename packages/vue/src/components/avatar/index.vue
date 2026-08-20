<script lang='ts' setup>
import { computed, useSlots } from 'vue'
import { avatarProps } from './props'

defineOptions({
  name: 'OAvatar',
  inheritAttrs: false,
})

const props = defineProps(avatarProps)
const slots = useSlots()

const variants = {
  hexagon: 'mask-hexagon',
  squircle: 'mask-squircle',
  triangle: 'mask-triangle',
}

const base = computed(() => [
  'avatar',
  `avatar-${props.size}`,
  props.variant ? variants[props.variant] : '',
  slots.default && !props.src ? 'avatar-placeholder' : '',
  props.online ? 'avatar-online' : '',
  props.offline ? 'avatar-offline' : '',
])

</script>

<template>
  <div :class="base">
    <div :w>
      <img v-if="src" :src :alt>
      <slot v-else />
    </div>
  </div>
</template>
