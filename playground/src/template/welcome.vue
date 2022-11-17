<script setup lang="ts">
import { version as vueVersion } from 'vue'
import { version as onuVersion } from 'onu-ui'
</script>

<template>
  <div class="p-5">
    <h1>Hello Onu UI!</h1>

    <o-button o="primary">
      Primary
    </o-button>

    <p>Vue {{ vueVersion }}</p>
    <p>Onu-UI {{ onuVersion }}</p>
  </div>
</template>

<style>
html{
  background-color: #212121;
  color: #fff;
}
</style>
