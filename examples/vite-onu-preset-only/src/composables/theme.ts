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
