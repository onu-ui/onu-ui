<script setup lang="ts">
// @ts-ignore
import { onMounted } from 'vue'
import App from './App.vue'
// @ts-ignore
import { getUnocssCompileRes, libInstall, sendHtml } from './lib-install.js'
libInstall()
onMounted(() => {
  sendHtml()
  getUnocssCompileRes()
})
</script>

<template>
  <App />
</template>
