<script lang='ts' setup>
import { ref } from 'vue'
import { Menu } from 'floating-vue'
import { resolveTheme } from '@onu-ui/preset'
import { mc } from 'magic-color'
import { DefaultThemeColor } from '../data/colors'

const color = ref(DefaultThemeColor)

const builtInColors = ref([
  { name: 'Default', color: DefaultThemeColor },
  { name: 'Red', color: '#ef4444' },
  { name: 'Orange', color: '#f97316' },
  { name: 'Amber', color: '#f59e0b' },
  { name: 'Yellow', color: '#eab308' },
  { name: 'Lime', color: '#84cc16' },
  { name: 'Green', color: '#22c55e' },
  { name: 'Emerald', color: '#10b981' },
  { name: 'Teal', color: '#14b8a6' },
  { name: 'Cyan', color: '#06b6d4' },
  { name: 'Sky', color: '#0ea5e9' },
  { name: 'Blue', color: '#3b82f6' },
  { name: 'Indigo', color: '#6366f1' },
  { name: 'Violet', color: '#8b5cf6' },
  { name: 'Purple', color: '#a855f7' },
  { name: 'Fuchsia', color: '#d946ef' },
  { name: 'Pink', color: '#ec4899' },
  { name: 'Rose', color: '#f43f5e' },
])

function switchTheme(c: string) {
  color.value = c

  const { meta } = resolveTheme(c)

  for (const key in meta) {
    document.documentElement.style.setProperty(key, meta[key])
  }
}
</script>

<template>
  <div flex="~ items-center justify-center" px-3>
    <Menu :distance="10" :arrow-padding="36">
      <div cursor-pointer text-xl :style="{ color }" i-carbon-color-switch :title="color" />

      <template #popper>
        <section shadow p-4 grid="~ cols-5 gap-3 wrap">
          <div
            v-for="meta in builtInColors" :key="meta.name" cursor-pointer w-4 rd aspect-square :style="{ backgroundColor: meta.color }"
            ring="~ offset-2 0 context"
            :class="color === meta.color ? 'ring-1px o-theme-DEFAULT' : ''"
            :title="meta.name"
            @click="switchTheme(meta.color)"
          />
          <div text-lg i-carbon-ibm-event-streams cursor-pointer title="random color" @click="switchTheme(mc.random())" />
        </section>
      </template>
    </Menu>
  </div>
</template>
