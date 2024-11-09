<script setup lang="ts">
import { FlowLayout } from 'vue-flow-layout'
import AvatarLayout from './components/o-avatar.vue'
import BadgeLayout from './components/o-badge.vue'
import ButtonLayout from './components/o-button.vue'
import CheckboxLayout from './components/o-checkbox.vue'
import InputLayout from './components/o-input.vue'
import RadioLayout from './components/o-radio.vue'
import SwitchLayout from './components/o-switch.vue'
</script>

<template>
  <div wrapper gap-2 mb-10 text-sm>
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

    <FlowLayout :cols="2" :gap="24" w-90vw>
      <ButtonLayout />
      <AvatarLayout />
      <BadgeLayout />
      <InputLayout />
      <SwitchLayout />
      <RadioLayout />
      <CheckboxLayout />
    </FlowLayout>
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
