<script lang="ts" setup>
import { ref } from 'vue'
const checkVal = ref(true)
</script>

<template>
  <o-checkbox
    v-model="checkVal"
    indeterminate
    label="indeterminate"
    o-primary
  />
</template>
