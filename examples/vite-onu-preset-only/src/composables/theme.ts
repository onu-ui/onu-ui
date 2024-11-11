import { resolveTheme } from '@onu-ui/preset/helper'
import { mc } from 'magic-color'
import { ref } from 'vue'

export const themeColors = ref([
  '#919b46',
  '#339448',
  '#ef584e',
])

export function generateTheme(color: string) {
  const { meta } = resolveTheme(color)

  for (const key in meta) {
    document.documentElement.style.setProperty(key, meta[key])
  }
}

export function randomTheme() {
  const color = mc.random()
  themeColors.value.push(color)
  generateTheme(color)
}

const radius = [0, 0.3, 0.5, 0.75, 1]
const raduiIdx = ref(2)

export function changeRadius() {
  if (raduiIdx.value >= radius.length - 1) {
    raduiIdx.value = 0
  }
  else {
    raduiIdx.value++
  }

  document.documentElement.style.setProperty('--onu-radius', `${radius[raduiIdx.value]}rem`)
}
