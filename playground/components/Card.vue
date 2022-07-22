<script lang='ts' setup>
import { OCard } from 'onu-ui'
defineProps<{name: string}>()
</script>

<template>
  <o-card b="~ gray4" rounded p="x-4 b-4">
    <h4>{{ name }}</h4>
    <div flex="~ gap-4">
      <slot />
    </div>
  </o-card>
</template>

<style lang='scss' scoped>
</style>
