<script setup lang='ts'>
const radio = ref('1')
</script>

<template>
  <div fscw gap-2>
    <o-radio-group v-model="radio">
      <o-radio label="1" fill="primary">
        primary
      </o-radio>
      <o-radio label="2" fill="secondary">
        secondary
      </o-radio>
      <o-radio label="3" fill="success">
        success
      </o-radio>
      <o-radio label="4" fill="warning">
        warning
      </o-radio>
      <o-radio label="5" fill="error">
        error
      </o-radio>
      <o-radio label="6" fill="info">
        info
      </o-radio>
    </o-radio-group>
  </div>
</template>

<style scope>
</style>
