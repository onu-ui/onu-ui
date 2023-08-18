<script lang='ts' setup>
import { avatarGroupProps } from './props'

defineOptions({
  name: 'OAvatarGroup',
})
defineProps(avatarGroupProps)
defineSlots<{
  default(props: unknown): any
}>()
</script>

<template>
  <div class="o-avatar-group-base" :class="[`o-avatar-group-${size}`]">
    <slot />
  </div>
</template>
