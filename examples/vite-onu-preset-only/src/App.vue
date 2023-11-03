<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const disabled = ref(true)
const count = ref(4)
const index = ref(0)

document.body.classList.add('dark')

function toggleTheme() {
  document.body.classList.toggle('dark')
}

function toggleDisabled() {
  disabled.value = !disabled.value
}
</script>

<template>
  <div wrapper gap-2>
    <div fcc gap-2 flex-wrap>
      <button class="btn-default" :disabled="disabled">
        btn-default
      </button>
      <a class="btn-default" :disabled="disabled">
        btn-default
      </a>
      <a class="btn" :disabled="disabled">
        btn-default
      </a>
      <button class="btn" @click="toggleDisabled">
        <i inline-block i-carbon:favorite-filled />
        toggleDisabled
      </button>
      <button class="btn" @click="toggleTheme">
        toggleTheme
      </button>
      <button class="btn btn-xs">
        btn btn-xs
        <i inline-block i-carbon:favorite-filled />
      </button>
      <button class="btn btn-xs aspect-square rd-full">
        <i inline-block i-carbon:favorite-filled />
      </button>
      <button class="btn btn-ghost">
        btn btn-ghost
      </button>
      <button class="btn btn-outline">
        btn btn-outline
      </button>
      <button class="btn btn-link">
        btn btn-link
      </button>
      <button :disabled="disabled" class="btn">
        disabled
      </button>
    </div>
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
