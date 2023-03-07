<script setup lang="ts">
import { ref } from 'vue'
const mv = ref(true)
const lightMv = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-switch v-model="mv" size="sm" o="primary" />
      <o-switch v-model="mv" size="md" v o="secondary" />
      <o-switch v-model="mv" size="lg" o="success" />
    </div>
    <div fscw gap-2>
      <o-switch v-model="lightMv" light size="sm" o="primary" />
      <o-switch v-model="lightMv" light size="md" v o="secondary" />
      <o-switch v-model="lightMv" light size="lg" o="success" />
    </div>
  </div>
</template>
