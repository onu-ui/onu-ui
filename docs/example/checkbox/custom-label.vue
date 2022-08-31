<script lang="ts" setup>
import { ref } from 'vue'
const customLabelString = ref('String-true')
const customLabelNumber = ref(0)
</script>

<template>
  <o-checkbox
    v-model="customLabelNumber"
    :label="`v-model:${customLabelNumber}`"
    :false-label="0"
    :true-label="1"
  />
  <o-checkbox
    v-model="customLabelString"
    :label="`v-model:${customLabelString}`"
    false-label="String-false"
    true-label="String-true"
  />
</template>
