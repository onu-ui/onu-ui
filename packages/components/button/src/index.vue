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

const isDisabled = computed(() => props.loading || props.disabled)
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="to && { href: to }"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    class="o-button-base"
    :class="[
      light ? 'o-button-light' : '',
      text ? 'o-button-text' : '',
      `o-button-${size}`,
      isDisabled ? 'o-disabled' : 'o-transition o-button-hover o-button-active',
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </component>
</template>
