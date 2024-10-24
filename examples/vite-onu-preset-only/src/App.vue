<script setup lang="ts">
import { resolveTheme } from '@onu-ui/preset/helper'
import { useDark } from '@vueuse/core'
import { mc } from 'magic-color'
import { ref } from 'vue'
import AvatarLayout from './components/o-avatar.vue'
import BadgeLayout from './components/o-badge.vue'
import ButtonLayout from './components/o-button.vue'
import InputLayout from './components/o-input.vue'
import RadioLayout from './components/o-radio.vue'
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
    <RadioLayout />
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
