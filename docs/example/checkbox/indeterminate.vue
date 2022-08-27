<script lang="ts" setup>
import { ref } from 'vue'
const checkVal = ref(true)
</script>

<template>
  <o-checkbox
      indeterminate
      v-model="checkVal"
      label="indeterminate"
  />
</template>
