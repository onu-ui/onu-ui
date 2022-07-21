<script lang='ts' setup>
defineProps<{name: string}>()
</script>

<template>
  <div b="~ gray4" rounded p="x-4 b-4">
    <h4>{{ name }}</h4>
    <div flex="~ gap-4">
      <slot />
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
