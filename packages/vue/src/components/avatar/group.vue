<script setup lang="ts">
import { computed } from 'vue'
import { avatarGroupProps } from './props'

defineOptions({
  name: 'OAvatarGroup',
})

const props = defineProps(avatarGroupProps)

const sizeClasses = {
  xs: 'avatar-group-xs',
  sm: 'avatar-group-sm',
  md: 'avatar-group-md',
  lg: 'avatar-group-lg',
}

const classes = computed(() => [
  'avatar-group',
  sizeClasses[props.size],
  props.vertical ? 'flex-col' : 'flex-row',
])

const overlapStyle = computed(() => ({
  '--onu-avatar-group-overlap': `${Number(props.vertical ? props['space-y'] : props['space-x']) * 0.25}rem`,
}))
</script>

<template>
  <div :class="classes" :style="overlapStyle">
    <slot />
  </div>
</template>

<style scoped>
.avatar-group.flex-row > :deep(.avatar:not(:first-child)) {
  margin-left: var(--onu-avatar-group-overlap);
}

.avatar-group.flex-col > :deep(.avatar:not(:first-child)) {
  margin-top: var(--onu-avatar-group-overlap);
}
</style>
