<script setup lang="ts">
import { computed, ref } from 'vue'
const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="h300px text-center wfull" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      :infinite-scroll-disabled="disabled"
      class="p5px m-0 list-none"
    >
      <li v-for="i in count" :key="i" class="flex justify-center h50px items-center bg-warningLight text-warningLightHover">
        {{ i }}
      </li>
    </ul>
    <p v-if="loading" class="text-warningLightHover">
      Loading...
    </p>
    <p v-if="noMore">
      No more
    </p>
  </div>
</template>
