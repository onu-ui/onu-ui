<script setup lang="ts">
import { ref, version as vueVersion } from 'vue'
import onuUI from 'onu-ui'
const msg = ref('Hello Onu UI!')
</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <o-button o="primary">
      <o-icon h-5 w-5 o="gray" name="i-carbon-moon" />
      Primary
    </o-button>
    <p>Vue {{ vueVersion }}</p>
    <p>onuUI {{ onuUI.version }}</p>
  </div>
</template>

<style>
.container {
  padding: 20px;
}
</style>
