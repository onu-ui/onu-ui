<script setup lang="ts">
import { onMounted } from 'vue'

function toggleTheme() {
  document.body.classList.toggle('dark')
}
</script>

<template>
  <div wrapper gap-2>
    <button class="btn-default" @click="toggleTheme">
      Button
    </button>
    <button class="btn">
      <i inline-block i-carbon:favorite-filled />
      Button
    </button>
    <button class="btn">
      Button
    </button>
    <button class="btn btn-xs">
      Button
      <i inline-block i-carbon:favorite-filled />
    </button>
    <button class="btn btn-xs aspect-square rd-full">
      <i inline-block i-carbon:favorite-filled />
    </button>
    <button class="btn btn-ghost">
      Button
    </button>
    <button class="btn btn-outline">
      Button
    </button>
    <button class="btn btn-link">
      Button
    </button>
    <button disabled class="btn btn-disabled">
      Button
    </button>
  </div>
</template>

<style>
:root{
  background-color: #ffffff;
  color: #222222;
}

:root .dark {
  background-color: #222222;
  color: #ffffff;
}
</style>
