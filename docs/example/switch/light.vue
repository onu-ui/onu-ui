<script setup lang="ts">
import { ref } from 'vue'
const mv = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-switch v-model="mv" light o="primary" />
      <o-switch v-model="mv" light v o="secondary" />
      <o-switch v-model="mv" light o="success" />
      <o-switch v-model="mv" light o="warning" />
      <o-switch v-model="mv" light o="error" />
      <o-switch v-model="mv" light o="info" />
    </div>
  </div>
</template>
