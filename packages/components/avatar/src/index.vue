<script lang='ts' setup>
import { avatarProps } from './props'

defineOptions({
  name: 'OAvatar',
})
const props = defineProps(avatarProps)
defineSlots<{
  default(props: unknown): any
}>()

const IsBgMode = computed(() => props.mode === 'bg')
</script>

<template>
  <component
    :is="IsBgMode ? 'div' : 'img'"
    class="o-transition o-avatar-base"
    :class="[IsBgMode ? 'o-avatar-mode-bg' : 'o-avatar-mode-img', `o-avatar-${size}`]"
    v-bind="IsBgMode ? { style: { backgroundImage: `url(${src})` } } : { src, alt: 'Avatar' }"
  >
    <slot v-if="IsBgMode" />
  </component>
</template>
