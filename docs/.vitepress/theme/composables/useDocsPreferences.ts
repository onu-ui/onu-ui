import { resolveTheme } from '@onu-ui/preset/helper'
import { computed, onMounted, readonly, shallowRef } from 'vue'
import { DefaultThemeColor } from '../data/colors'

export type DocsMode = 'preset' | 'vue'
export type DocsRadius = '0rem' | '0.375rem' | '0.5rem' | '0.75rem'

const STORAGE_KEY = 'onu-docs-preferences'
const DEFAULT_RADIUS: DocsRadius = '0.5rem'

const mode = shallowRef<DocsMode>('preset')
const color = shallowRef(DefaultThemeColor)
const radius = shallowRef<DocsRadius>(DEFAULT_RADIUS)
const initialized = shallowRef(false)

const validRadii: DocsRadius[] = ['0rem', '0.375rem', '0.5rem', '0.75rem']

function applyPreferences() {
  if (typeof document === 'undefined')
    return

  const root = document.documentElement
  const { meta } = resolveTheme(color.value)

  root.dataset.onuDocsMode = mode.value
  root.style.setProperty('--onu-radius', radius.value)
  root.style.setProperty('--onu-docs-radius', radius.value)

  for (const [key, value] of Object.entries(meta))
    root.style.setProperty(key, value)
}

function persistPreferences() {
  if (typeof localStorage === 'undefined')
    return

  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    mode: mode.value,
    color: color.value,
    radius: radius.value,
  }))
}

function updatePreferences() {
  applyPreferences()
  persistPreferences()
}

export function useDocsPreferences() {
  const isVueMode = computed({
    get: () => mode.value === 'vue',
    set: value => setMode(value ? 'vue' : 'preset'),
  })

  function setMode(value: DocsMode) {
    mode.value = value
    updatePreferences()
  }

  function setColor(value: string) {
    color.value = value
    updatePreferences()
  }

  function setRadius(value: DocsRadius) {
    radius.value = value
    updatePreferences()
  }

  onMounted(() => {
    if (!initialized.value) {
      try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Partial<{
          mode: DocsMode
          color: string
          radius: DocsRadius
        }>

        if (stored.mode === 'preset' || stored.mode === 'vue')
          mode.value = stored.mode
        if (typeof stored.color === 'string' && CSS.supports('color', stored.color))
          color.value = stored.color
        if (stored.radius && validRadii.includes(stored.radius))
          radius.value = stored.radius
      }
      catch {
        localStorage.removeItem(STORAGE_KEY)
      }

      initialized.value = true
    }

    applyPreferences()
  })

  return {
    color: readonly(color),
    isVueMode,
    mode: readonly(mode),
    radius: readonly(radius),
    setColor,
    setMode,
    setRadius,
  }
}
