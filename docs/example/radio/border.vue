<script setup lang='ts'>
const radio = ref('1')
</script>

<template>
  <div fscw gap-2>
    <o-radio-group v-model="radio">
      <o-radio label="1" border>
        Option A
      </o-radio>
      <o-radio label="2" border>
        Option B
      </o-radio>
      <o-radio label="3" border disabled>
        Option C
      </o-radio>
    </o-radio-group>
  </div>
</template>

<style scope>
</style>
