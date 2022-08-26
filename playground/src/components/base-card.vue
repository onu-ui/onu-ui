<script setup lang="ts" name="O-Card">
interface ICardProps {
  to?: string
  icon?: string
}
defineProps<ICardProps>()
</script>

<template>
  <div
    class="rounded-lg shadow-lg p-8 bg-gradient-from-rgba(255, 255, 255, 0.2) bg-gradient-to-rgba(255, 255, 255, 0.035) backdrop-blur-lg overflow-hidden"
  >
    <slot />
  </div>
</template>
