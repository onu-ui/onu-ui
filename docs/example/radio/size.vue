<script setup lang='ts'>
const radio = ref('1')
</script>

<template>
  <div fscw gap-2>
    <o-radio-group v-model="radio">
      <o-radio label="1" size="xs">
        Mini
      </o-radio>
      <o-radio label="2" size="sm">
        Small
      </o-radio>
      <o-radio label="3" size="md">
        Medium
      </o-radio>
      <o-radio label="4" size="lg">
        Large
      </o-radio>
    </o-radio-group>
  </div>
</template>

<style scope>
</style>
