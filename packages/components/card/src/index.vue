<script setup lang="ts" name="O-Card">
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card{
    background: linear-gradient(86.16deg, rgba(255, 255, 255, 0.2) 11.14%, rgba(255, 255, 255, 0.035) 113.29%);
    box-shadow: 0px 1.1966px 29.915px rgba(69, 42, 124, 0.1);
    backdrop-filter: blur(70px);
    border-radius: 2px;
}
</style>
