<script lang='ts' setup name="OAvatarGroup">
import { avatarGroupProps } from './props'

defineProps(avatarGroupProps)
</script>

<template>
  <div class="o-avatar-group-base" :class="[`o-avatar-group-${size}`]">
    <slot />
  </div>
</template>
