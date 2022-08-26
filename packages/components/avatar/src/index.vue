<script lang='ts' setup name="O-Avatar">
import type { SizeType } from '../../type'

interface IAvatarProps {
  src?: string
  size?: SizeType
  mode?: 'bg' | 'img'
}

const props = withDefaults(defineProps<IAvatarProps>(), {
  size: 'md',
  mode: 'bg',
})

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
