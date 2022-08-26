<script setup lang="ts" name="O-Card">
interface ICardProps {
  to?: string
  icon?: string
}
defineProps<ICardProps>()
</script>

<template>
  <div
    class="o-card-base"
  >
    <slot />
  </div>
</template>
