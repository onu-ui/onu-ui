<script lang='ts' setup>
defineProps<{ name: string }>()
</script>

<template>
  <o-card space-y-2>
    <h4 text="white op-60">
      {{ name }}
    </h4>
    <div flex="~ gap-4">
      <slot />
    </div>
  </o-card>
</template>

<style lang='scss' scoped>
</style>
