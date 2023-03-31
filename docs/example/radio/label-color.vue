<script setup lang='ts'>
const radio = ref('1')
</script>

<template>
  <div fscw gap-2>
    <o-radio-group v-model="radio">
      <o-radio label="0" label-color="warning">
        Option
      </o-radio>
      <o-radio label="1" label-color="primary" not-text-color>
        primary
      </o-radio>
      <o-radio label="2" label-color="secondary" not-text-color>
        secondary
      </o-radio>
      <o-radio label="3" label-color="success" not-text-color>
        success
      </o-radio>
      <o-radio label="4" label-color="warning" not-text-color>
        warning
      </o-radio>
      <o-radio label="5" label-color="error" not-text-color>
        error
      </o-radio>
      <o-radio label="6" label-color="info" not-text-color>
        info
      </o-radio>
    </o-radio-group>
  </div>
</template>

<style scope>
</style>
