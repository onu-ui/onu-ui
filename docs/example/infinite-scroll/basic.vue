<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
</script>

<template>
  <ul v-infinite-scroll="load" class="w-100% h300px p5px box-border m-0 list-none" style="overflow: auto">
    <li v-for="i in count" :key="i" class="flex justify-center h50px items-center bg-primary-light text-primaryLightHover">
      {{ i }}
    </li>
  </ul>
</template>
