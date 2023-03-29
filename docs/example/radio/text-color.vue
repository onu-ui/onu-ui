<script setup lang='ts'>
const radio = ref('1')
</script>

<template>
  <div fscw gap-2>
    <o-radio-group v-model="radio">
      <o-radio label="1" text-color="primary">
        primary
      </o-radio>
      <o-radio label="2" text-color="secondary">
        secondary
      </o-radio>
      <o-radio label="3" text-color="success">
        success
      </o-radio>
      <o-radio label="4" text-color="warning">
        warning
      </o-radio>
      <o-radio label="5" text-color="error">
        error
      </o-radio>
      <o-radio label="6" text-color="info">
        info
      </o-radio>
    </o-radio-group>
  </div>
</template>

<style scope>
</style>
