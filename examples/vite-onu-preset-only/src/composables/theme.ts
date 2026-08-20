import { resolveTheme } from '@onu-ui/preset/helper'
import { useStyleTag } from '@vueuse/core'
import { mc } from 'magic-color'
import { computed, shallowRef } from 'vue'

export const themeColors = shallowRef<(string | undefined)[]>([
  undefined,
  '#919b46',
  '#339448',
  '#32324d',
])

export const themeIdx = shallowRef(0)

const selectedThemeColor = shallowRef<string>()
const themeCss = computed(() => resolveTheme(selectedThemeColor.value).cssMinify)

const themeStyle = useStyleTag(themeCss, {
  id: 'onu-example-theme',
  immediate: false,
})

export const currentThemeColor = computed(() => selectedThemeColor.value ?? '默认黑白灰')

export function generateTheme(color?: string) {
  let index = themeColors.value.indexOf(color)

  if (index === -1) {
    themeColors.value = [...themeColors.value, color]
    index = themeColors.value.length - 1
  }

  selectedThemeColor.value = color
  themeIdx.value = index

  themeStyle.unload()
  themeStyle.load()
}

export function randomTheme() {
  const color = mc.random()
  generateTheme(color)
}

const radius = [0, 0.3, 0.5, 0.75, 1]
const raduiIdx = shallowRef(2)

export function changeRadius() {
  if (raduiIdx.value >= radius.length - 1) {
    raduiIdx.value = 0
  }
  else {
    raduiIdx.value++
  }

  document.documentElement.style.setProperty('--onu-radius', `${radius[raduiIdx.value]}rem`)
}
