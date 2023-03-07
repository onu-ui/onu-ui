<script setup lang="ts">
import { ref } from 'vue'
const mv = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-switch v-model="mv" o="primary" />
      <o-switch v-model="mv" v o="secondary" />
      <o-switch v-model="mv" o="success" />
      <o-switch v-model="mv" o="warning" />
      <o-switch v-model="mv" o="error" />
      <o-switch v-model="mv" o="info" />
    </div>
  </div>
</template>
