<script setup lang="ts">
import { ref } from 'vue'
import { useDark } from '@vueuse/core'
import { mc } from 'magic-color'
import { resolveTheme } from '@onu-ui/preset/helper'
import ButtonLayout from './components/o-button.vue'
import AvatarLayout from './components/o-avatar.vue'
import BadgeLayout from './components/o-badge.vue'
import InputLayout from './components/o-input.vue'
import SwitchLayout from './components/o-switch.vue'

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
  <div wrapper gap-2 mb-10>
    <div flex items-center justify-center gap-2>
      <div v-for="c in themeColors" :key="c" cursor-pointer w-10 h-10 rd :style="{ backgroundColor: c }" @click="generateTheme(c)" />
    </div>
    <div>{{ themeColors }}</div>
    <button btn @click="randomTheme()">
      Random Theme
    </button>
    <button class="btn" @click="toggleDark()">
      Toggle Dark
    </button>

    <ButtonLayout />
    <AvatarLayout />
    <BadgeLayout />
    <InputLayout />
    <SwitchLayout />

    <label class="radio radio-theme-400" for="foo">
      <input
        id="foo" value="foo" name="output" type="radio" :checked="true"
        class="peer"
      >
      <span />
    </label>

    <label class="relative flex items-center cursor-pointer" for="foo">
      <input
        id="foo" value="foo" name="output" type="radio" :checked="true"
        class="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300:50 checked:border-purple:30 transition-all"
      >
      <span
        class="absolute bg-purple size-0 rounded-full peer-checked:size-2.2 transition-all duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </label>
    <label class="relative flex items-center cursor-pointer" for="foo">
      <input
        id="foo" value="foo" name="output" type="radio" :checked="true"
        class="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300:50 checked:border-purple:30 transition-all"
      >
      <span
        class="absolute bg-purple size-0 rounded-full peer-checked:size-2.2 transition-all duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </label>
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
