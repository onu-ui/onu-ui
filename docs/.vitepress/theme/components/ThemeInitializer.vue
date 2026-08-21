<script setup lang="ts">
import { useDocsPreferences } from '../composables/useDocsPreferences'

useDocsPreferences()
</script>

<template>
  <span class="theme-initializer" aria-hidden="true" />
</template>

<style scoped>
.theme-initializer {
  display: none;
}
</style>
