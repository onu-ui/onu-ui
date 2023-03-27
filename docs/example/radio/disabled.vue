<script setup lang='ts'>
const radio = ref('selected and disabled')
</script>

<template>
  <div fscw gap-2>
    <o-radio v-model="radio" label="disabled" disabled>
      Option A
    </o-radio>
    <o-radio v-model="radio" label="selected and disabled" disabled>
      disabled B
    </o-radio>
  </div>
</template>

<style scope>
</style>
