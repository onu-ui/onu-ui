<script lang='ts' setup>
import BaseCard from './base-card.vue'
defineProps<{ name: string }>()
</script>

<template>
  <BaseCard space-y-2>
    <h4 text="white op-60">
      {{ name }}
    </h4>
    <div flex="~ gap-4">
      <slot />
    </div>
  </BaseCard>
</template>

<style lang='scss' scoped>
</style>
