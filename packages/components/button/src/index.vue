<script setup lang="ts" name="O-Button">
 interface IButtonProps {
  to?: string
  icon?: string
}

defineProps<IButtonProps>()
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :class="to && 'o-button-link'"
    class="text-md o-button o-transition o-button-base hover:o-button-hover active:o-button-active focus-visible:o-focus-base o-disabled:o-disabled"
  >
    <slot name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </component>
</template>
