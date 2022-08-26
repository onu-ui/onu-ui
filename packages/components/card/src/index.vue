<script setup lang="ts" name="O-Card">
interface ICardProps {
  /** 标题 */
  title?: string,
}
defineProps<ICardProps>()
</script>

<template>
  <div class="o-card-base">
    <slot />
  </div>
</template>
