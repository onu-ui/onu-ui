<script lang='ts' setup name="O-Avatar-Group">
import type { SizeType } from '../../type'

interface IAvatarGroupProps {
    size: SizeType
}

withDefaults(defineProps<IAvatarGroupProps>(), {
  size: 'md',
})
</script>

<template>
  <div class="o-avatar-group-base" :class="[`o-avatar-group-${size}`]">
    <slot />
  </div>
</template>
