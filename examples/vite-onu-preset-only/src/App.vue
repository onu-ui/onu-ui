<script setup lang="ts">
import { ref } from 'vue'
import { useDark } from '@vueuse/core'
import { mc } from 'magic-color'
import { resolveTheme } from '../../../packages/preset/src'
import ButtonLayout from './comonents/o-button.vue'

const value = ref('')
const disabled = ref(false)
const count = ref(4)
const index = ref(0)

const isDark = useDark()
function toggleDark() {
  isDark.value = !isDark.value
}

const themeColors = ref([
  '#919b46',
  '#339448',
  '#ef584e',
])

function generateTheme(color: string) {
  const { meta } = resolveTheme(color)

  for (const key in meta) {
    document.documentElement.style.setProperty(key, meta[key])
  }
}

function randomTheme() {
  const color = mc.random()
  themeColors.value.push(color)
  generateTheme(color)
}
</script>

<template>
  <div wrapper gap-2>
    <div flex items-center justify-center gap-2>
      <div v-for="c in themeColors" :key="c" cursor-pointer w-10 h-10 rd :style="{ backgroundColor: c }" @click="generateTheme(c)" />
    </div>

    <button btn @click="randomTheme()">
      Random Theme
    </button>
    <button class="btn" @click="toggleDark()">
      Toggle Dark
    </button>

    <ButtonLayout />
    <div fcc gap-2>
      <input v-model="value" type="text" :disabled="disabled" class="input-default" placeholder="input-default...">
      <input v-model="value" type="text" :disabled="disabled" class="input" placeholder="input...">
      <input v-model="value" type="text" class="input input-sm" placeholder="input input-sm...">
      <input v-model="value" type="text" :disabled="disabled" class="input input-none" placeholder="input input-none...">
    </div>
    <div fcc gap-2>
      <div class="btn-group">
        <button v-for="i in count" :key="i" class="btn btn-solid-cover" :class="index === i - 1 ? 'btn-group-active' : ''" @click="index = i - 1">
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

.dark {
  background-color: #1a1817;
  color: #ffffff;
}
</style>
