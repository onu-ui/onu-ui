<script lang='ts' setup>
import { ref } from 'vue'
import OCard from './o-card.vue'

const checked = ref(false)
const disabled = ref(false)
</script>

<template>
  <OCard title="Switch Component" desc="Switch component with custom style">
    <div flex items-center gap-2>
      <label switch="~ default">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot dot-red />
      </label>

      <label switch="~ xs purple" bg-amber>
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~ sm theme-400">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~ md theme-400">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~ lg red">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~ theme-400">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <div switch-dot important:bg-op-50>
          <i :class="checked ? 'i-carbon-moon' : 'i-carbon-sun'" />
        </div>
      </label>
    </div>

    <template #footer>
      <button btn @click="checked = !checked">
        Toggle checked
      </button>
      <button btn @click="disabled = !disabled">
        Toggle disabled
      </button>
    </template>
  </OCard>
</template>
