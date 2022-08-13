<script setup lang="ts" name="O-Button">
interface IButtonProps {
  to?: string
  // icon?: string
  light?: boolean
  text?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

withDefaults(defineProps<IButtonProps>(), {
  size: 'md',
})

const sizeMap = {
  xs: 'o-button-xs',
  sm: 'o-button-sm',
  md: 'o-button-md',
  lg: 'o-button-lg',
  xl: 'o-button-xl',
}
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="to ? { href: to } : {}"
    class="o-transition o-button-base o-button-hover o-button-active"
    :class="[
      light? 'o-button-light': '',
      text? 'o-button-text': '',
      sizeMap[size], 
    ]"
  >
    <slot name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </component>
</template>
