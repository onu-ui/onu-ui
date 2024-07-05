<script lang='ts' setup>
import { ref } from 'vue'

const value = ref('')
const disabled = ref(false)
</script>

<template>
  <div space-y-2>
    <div flex items-center justify-center gap-2>
      <input v-model="value" type="text" :disabled="disabled" class="input-default" placeholder="input-default...">
      <input v-model="value" type="text" :disabled="disabled" class="input" placeholder="input...">
      <input v-model="value" type="text" class="input input-sm" placeholder="input input-sm...">
      <input v-model="value" type="text" :disabled="disabled" class="input input-none" placeholder="input input-none...">
    </div>
    <div flex items-center justify-center gap-2>
      <input v-model="value" type="text" :disabled="disabled" class="input input-xs" placeholder="input-xs...">
      <input v-model="value" type="text" :disabled="disabled" class="input input-sm" placeholder="input-sm...">
      <input v-model="value" type="text" :disabled="disabled" class="input input-md" placeholder="input-md...">
      <input v-model="value" type="text" :disabled="disabled" class="input input-lg" placeholder="input-lg...">
    </div>
    <div flex items-center justify-center gap-2>
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="Search">
        <i text-theme-DEFAULT inline-block i-carbon:favorite-filled />
      </label>
      <label class="input input-dashed flex items-center gap-2">
        <i text-theme-DEFAULT inline-block i-carbon:favorite-filled />
        <input type="text" class="grow" placeholder="Email">
      </label>
    </div>
  </div>
</template>
