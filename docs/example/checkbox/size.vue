<script lang="ts" setup>
const checkVal = ref(true)
</script>

<template>
  <div fsc gap-2>
    <o-checkbox v-model="checkVal" size="md" label="Medium" />
    <o-checkbox v-model="checkVal" size="lg" label="Large" />
  </div>
</template>
