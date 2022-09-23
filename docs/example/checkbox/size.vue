<template>
  <div fsc gap-2>
    <o-checkbox v-model="checkVal" size="md" o-primary label="Medium" />
    <o-checkbox v-model="checkVal" o-primary size="lg" label="Large" />
  </div>
</template>

<script lang="ts" setup>
const checkVal = ref(true)
</script>
