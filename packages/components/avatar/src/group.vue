<script lang='ts' setup>
import { avatarGroupProps } from './props'

defineProps(avatarGroupProps)
defineOptions({
  name: 'OAvatarGroup',
})
defineSlots<{
  default(props: unknown): any
}>()
</script>

<template>
  <div class="o-avatar-group-base" :class="[`o-avatar-group-${size}`]">
    <slot />
  </div>
</template>
