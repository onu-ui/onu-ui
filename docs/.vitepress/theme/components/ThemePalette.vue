<script lang='ts' setup>
import { ref } from 'vue'
import { DefaultThemeColor } from '../data/colors'
import ThemePaletteInner from './ThemePaletteInner.vue'

const color = ref(DefaultThemeColor)
</script>

<template>
  <div flex="~ items-center justify-center" px-3>
    <!-- @unocss-skip-start -->
    <VMenu :distance="8" :delay="{ show: 0, hide: 100 }">
      <!-- @unocss-skip-end -->
      <div cursor-pointer text-xl :style="{ color }" i-carbon-color-switch :title="color" />

      <template #popper>
        <ThemePaletteInner v-model="color" />
      </template>
    </VMenu>
  </div>
</template>
