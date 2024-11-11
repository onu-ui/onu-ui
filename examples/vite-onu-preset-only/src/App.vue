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
  <div>
    <header flex="~ items-center gap-3" text-lg hover:children:text-theme-400 px-3 py-1.5 rd-full fixed z-10 backdrop-blur-sm top-2 right-2 border="~ solid theme-400-20">
      <button i-carbon-color-palette title="Change to a random theme" @click="randomTheme()" />
      <button i-carbon-rotate-counterclockwise-alt-filled title="Switch Radius" @click="changeRadius()" />
      <button i-carbon-sun dark:i-carbon-moon title="Dark/Light" @click="toggleDark()" />
      <a href="https://github.com/onu-ui/onu-ui" target="_blank" i-carbon-logo-github />
    </header>
    <div fixed left-2 top-2 z-10 backdrop-blur-sm px-3 py-1.5 rd-lg max-w-93 border="~ solid theme-400-20">
      <div flex items-center justify-start gap-2 flex-wrap>
        <div v-for="c in themeColors" :key="c" :title="c" flex items-center justify-center cursor-pointer w-6 aspect-square rd :style="{ backgroundColor: c }" @click="generateTheme(c)" />
      </div>
    </div>
    <div w-full px-10 mt-14 mb-10 text-sm>
      <FlowLayout :cols="2" :gap="24" w-full>
        <ButtonLayout />
        <AvatarLayout />
        <BadgeLayout />
        <InputLayout />
        <SwitchLayout />
        <RadioLayout />
        <CheckboxLayout />
        <OCard title="Card Component" desc="Card description">
          I'm a card body
          <template #footer>
            <button btn>
              Click me
            </button>
          </template>
        </OCard>
      </FlowLayout>
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
