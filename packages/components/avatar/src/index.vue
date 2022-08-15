<script lang='ts' setup name="O-Avatar">
import { avatarEmits } from './avatar'
interface IAvatarProps {
  src?: string
  icon?: string
  shape?: 'square' | 'circle'
  size?: 'small' | 'default' | 'large'
  fit?:'fill' | 'contain' | 'cover' | 'none' | 'scaleDown'
  alt?: string
  srcSet?: string
}

const props = withDefaults(defineProps<IAvatarProps>(), {
  shape: 'circle',
  size: 'default',
  fit: 'cover',
})
const emit = defineEmits(avatarEmits)
const flag = true
const handleError = (e: Event) => {
  emit('error', e)
}
const sizeEnum = {
  small: 'o-avatar-size-small',
  default: 'o-avatar-size-default',
  large: 'o-avatar-size-large',
}
const fitEnum = {
  fill: 'o-avatar-fit-fill',
  contain: 'o-avatar-fit-contain',
  cover: 'o-avatar-fit-cover',
  none: 'o-avatar-fit-none',
  scaleDown: 'o-avatar-fit-scale-down',
}
const shapeEnum = {
  square: 'rounded-md',
  circle: 'rounded-full',
}
</script>

<template>
  <div>
    <div :class="[`${sizeEnum[size]}`, `${shapeEnum[shape]}`]" class="o-avatar-base">
      <img
        v-if="src || srcSet"
        :src="src"
        :alt="alt"
        :src-set="srcSet"
        class="block h-full w-full"
        :class="[`${fitEnum[fit]}`]"
        @error="handleError"
      >

      <div v-else-if="icon" :class="icon" class="o-avatar-icon" />
      <slot v-else />
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
