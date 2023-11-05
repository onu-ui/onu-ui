<script setup lang="ts">
import { ref } from 'vue'
import ButtonLayout from './comonents/o-button.vue'

const value = ref('')
const disabled = ref(true)
const count = ref(4)
const index = ref(0)
</script>

<template>
  <div wrapper gap-2>
    <ButtonLayout />
    <div fcc gap-2>
      <input v-model="value" type="text" :disabled="disabled" class="input-default" placeholder="input-default...">
      <input v-model="value" type="text" :disabled="disabled" class="input" placeholder="input...">
      <input v-model="value" type="text" class="input input-sm" placeholder="input input-sm...">
      <input v-model="value" type="text" :disabled="disabled" class="input input-none" placeholder="input input-none...">
    </div>
    <div fcc gap-2>
      <div class="btn-group">
        <button v-for="i in count" :key="i" class="btn" :class="index === i - 1 ? 'btn-active' : ''" @click="index = i - 1">
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<style>
:root{
  background-color: #ffffff;
  color: #222222;
}

:root .dark {
  background-color: #1a1817;
  color: #ffffff;
}
</style>
