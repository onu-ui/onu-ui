<script lang="ts" setup>
import { ref } from 'vue'
const checkVal = ref(true)
</script>

<template>
  <o-checkbox
      disabled
      v-model="checkVal"
      label="disabled"
  />
</template>
