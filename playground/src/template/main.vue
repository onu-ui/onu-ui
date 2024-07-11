<script setup lang="ts">
import { onMounted } from 'vue'

import App from './App.vue'
import { getUnocssCompileRes, init, libInstall, sendHtml } from './lib-install.js'

libInstall()
onMounted(async () => {
  await init()
  sendHtml()
  getUnocssCompileRes()
})
</script>

<template>
  <App />
</template>
