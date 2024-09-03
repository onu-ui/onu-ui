<script lang='ts' setup>
import { avatarGroupProps } from './props'

defineOptions({
  name: 'OAvatarGroup',
})

const props = defineProps(avatarGroupProps)

const sizeMap = {
  xs: 'avatar-group-xs',
  sm: 'avatar-group-sm',
  md: 'avatar-group-md',
  lg: 'avatar-group-lg',
}

const base = [
  'avatar-group',
  sizeMap[props.size],
  props.vertical ? 'flex-col' : 'flex-row',
]

const binds = props.vertical ? { 'space-y': props['space-y'] } : { 'space-x': props['space-x'] }

// <div space-x="-6" space-y="-6"></div>
</script>

<template>
  <div :class="base" v-bind="binds">
    <slot />
  </div>
</template>
