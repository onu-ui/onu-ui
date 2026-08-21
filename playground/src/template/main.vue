<script setup lang="ts">
import { onMounted } from 'vue'

import App from './App.vue'
import { getUnocssCompileRes, init, sendHtml } from './lib-install.js'

onMounted(async () => {
  await init()
  sendHtml()
  getUnocssCompileRes()
})
</script>

<template>
  <App />
</template>
