<script lang='ts' setup name="OAvatar-Group">
import { avatarGroupProps } from './avatar'

defineProps(avatarGroupProps)
</script>

<template>
  <div class="o-avatar-group-base" :class="[`o-avatar-group-${size}`]">
    <slot />
  </div>
</template>
