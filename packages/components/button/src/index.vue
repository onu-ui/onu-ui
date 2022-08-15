<script setup lang="ts" name="O-Button">
import { computed } from 'vue'
interface IButtonProps {
  to?: string
  // icon?: string
  light?: boolean
  text?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: 'md',
})

const sizeMap = {
  xs: 'o-button-xs',
  sm: 'o-button-sm',
  md: 'o-button-md',
  lg: 'o-button-lg',
  xl: 'o-button-xl',
}

const isDisabled = computed(() => props.loading || props.disabled)
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="to ? { href: to } : {}"
    :disabled="disabled"
    class="o-transition o-button-base o-button-hover o-button-active"
    :class="[
      light ? 'o-button-light' : '',
      text ? 'o-button-text' : '',
      sizeMap[size],
      disabled ? 'o-disabled' : '',
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </component>
</template>
