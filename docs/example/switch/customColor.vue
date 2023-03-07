<script setup lang="ts">
import { ref } from 'vue'
const mv = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-switch v-model="mv" o="#D2001A" background-color="#FFDE00" />
      <o-switch v-model="mv" o="#7F5283" background-color="#00A0E9" />
      <o-switch v-model="mv" o="#00A878" background-color="#FF7F00" />
      <o-switch v-model="mv" light o="#FFA69E" background-color="#FF686B" />
      <o-switch v-model="mv" light o="#84DCC6" background-color="#8DA1B9" />
      <o-switch v-model="mv" light o="#DBC7BE" background-color="#EF959C" />
    </div>
  </div>
</template>
