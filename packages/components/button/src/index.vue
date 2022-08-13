<script setup lang="ts" name="O-Button">
 interface IButtonProps {
  to?: string
  icon?: string
  light?: boolean
}

withDefaults(defineProps<IButtonProps>(), {
  to: '',
  icon: 'medium',
})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="to ? { href: to } : {}"
    class="o-transition o-button-base"
    :class="light ? 'o-button-light' : ''"
  >
    <slot name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </component>
</template>
