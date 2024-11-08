<script lang='ts' setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div>
    <label switch="~ theme-400">
      <input v-model="checked" class="peer" type="checkbox">
      <div switch-dot important:bg-op-50>
        <i :class="checked ? 'i-carbon-moon' : 'i-carbon-sun'" />
      </div>
    </label>

    <label ml-2 switch="~ theme-400">
      <input v-model="checked" class="peer" type="checkbox">
      <div switch-dot important:bg-op-50 text-10px>
        {{ checked ? 'ON' : 'OFF' }}
      </div>
    </label>
  </div>
</template>
