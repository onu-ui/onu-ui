<script setup lang='ts'>
const radio = ref('1')
</script>

<template>
  <div fscw gap-2>
    <o-radio-group v-model="radio">
      <o-radio label="1">
        Option 1
      </o-radio>
      <o-radio label="2" disabled>
        Option 2
      </o-radio>
      <o-radio label="3">
        Option 3
      </o-radio>
    </o-radio-group>
  </div>
</template>

<style scope>
</style>
