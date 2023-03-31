<script setup lang='ts'>
const radio = ref(3)
</script>

<template>
  <div fscw gap-2>
    <o-radio-group v-model="radio">
      <o-radio :label="3">
        Option A
      </o-radio>
      <o-radio :label="6" disabled>
        Option B
      </o-radio>
      <o-radio :label="9">
        Option C
      </o-radio>
    </o-radio-group>
  </div>
</template>

<style scope>
</style>
