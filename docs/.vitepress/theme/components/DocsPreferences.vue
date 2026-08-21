<script setup lang="ts">
import type { DocsMode, DocsRadius } from '../composables/useDocsPreferences'
import { computed } from 'vue'
import { useDocsPreferences } from '../composables/useDocsPreferences'
import { DocsThemeColors } from '../data/colors'

const { color, mode, radius, setColor, setMode, setRadius } = useDocsPreferences()
const activeColorLabel = computed(() => DocsThemeColors.find(item => item.value === color.value)?.label ?? 'Custom')

const modes: Array<{ label: string, value: DocsMode }> = [
  { label: 'Preset', value: 'preset' },
  { label: 'Vue', value: 'vue' },
]

const radii: Array<{ label: string, value: DocsRadius }> = [
  { label: '0', value: '0rem' },
  { label: 'S', value: '0.375rem' },
  { label: 'M', value: '0.5rem' },
  { label: 'L', value: '0.75rem' },
]

function selectMode(value: DocsMode) {
  setMode(value)
}
</script>

<template>
  <section class="docs-preferences" aria-labelledby="docs-preferences-title">
    <div class="docs-preferences__heading">
      <span id="docs-preferences-title">Preferences</span>
      <span>{{ activeColorLabel }}</span>
    </div>

    <div class="docs-preferences__row">
      <span class="docs-preferences__label">Docs</span>
      <div class="docs-preferences__segments" role="group" aria-label="Documentation mode">
        <button
          v-for="item in modes"
          :key="item.value"
          type="button"
          :class="{ 'is-active': mode === item.value }"
          :aria-pressed="mode === item.value"
          @click="selectMode(item.value)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>

    <div class="docs-preferences__row">
      <span class="docs-preferences__label">Theme</span>
      <div class="docs-preferences__colors" role="group" aria-label="Theme color">
        <button
          v-for="item in DocsThemeColors"
          :key="item.label"
          type="button"
          class="docs-preferences__color"
          :class="{ 'is-active': color === item.value, 'is-default': item.isDefault }"
          :style="item.isDefault ? undefined : { backgroundColor: item.value }"
          :title="item.label"
          :aria-label="`Use ${item.label} theme`"
          :aria-pressed="color === item.value"
          @click="setColor(item.value)"
        >
          <span v-if="item.isDefault" class="docs-preferences__default-mark" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="docs-preferences__row">
      <span class="docs-preferences__label">Radius</span>
      <div class="docs-preferences__radii" role="group" aria-label="Corner radius">
        <button
          v-for="item in radii"
          :key="item.value"
          type="button"
          :class="{ 'is-active': radius === item.value }"
          :aria-label="`Use ${item.value} corner radius`"
          :aria-pressed="radius === item.value"
          @click="setRadius(item.value)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.docs-preferences {
  margin: 0 0 18px;
  padding: 0 4px 18px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.docs-preferences__heading,
.docs-preferences__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.docs-preferences__heading {
  min-height: 28px;
  color: var(--vp-c-text-3);
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.docs-preferences__heading span:first-child {
  color: var(--vp-c-text-2);
}

.docs-preferences__heading span:last-child {
  color: var(--vp-c-text-1);
}

.docs-preferences__row {
  min-height: 44px;
  border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) 68%, transparent);
}

.docs-preferences__segments {
  display: grid;
  width: 132px;
  padding: 3px;
  grid-template-columns: 1fr 1fr;
  border-radius: 7px;
  background: var(--vp-c-bg-soft);
}

.docs-preferences__segments button {
  height: 27px;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--vp-c-text-3);
  font: inherit;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease;
}

.docs-preferences__segments button.is-active {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  box-shadow: 0 1px 2px color-mix(in srgb, var(--vp-c-text-1) 16%, transparent);
}

.docs-preferences__segments button:active,
.docs-preferences__color:active,
.docs-preferences__radii button:active {
  transform: translateY(1px);
}

.docs-preferences__segments button:focus-visible,
.docs-preferences__color:focus-visible,
.docs-preferences__radii button:focus-visible {
  outline: 2px solid var(--vp-c-text-1);
  outline-offset: 2px;
}

.docs-preferences__label {
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 550;
}

.docs-preferences__colors,
.docs-preferences__radii {
  display: flex;
  align-items: center;
  gap: 5px;
}

.docs-preferences__color {
  position: relative;
  width: 17px;
  height: 17px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--vp-c-text-1) 18%, transparent);
  cursor: pointer;
  transition: box-shadow 160ms ease, transform 160ms ease;
}

.docs-preferences__color.is-active {
  box-shadow: 0 0 0 2px var(--vp-c-bg), 0 0 0 3px var(--vp-c-text-1);
}

.docs-preferences__color.is-default {
  display: grid;
  width: 23px;
  height: 23px;
  place-items: center;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  box-shadow: none;
}

.docs-preferences__default-mark {
  width: 11px;
  height: 11px;
  border: 1px solid color-mix(in srgb, var(--vp-c-text-1) 22%, transparent);
  border-radius: 50%;
  background: linear-gradient(135deg, #f4f4f5 0 48%, #18181b 52% 100%);
}

.docs-preferences__color.is-default.is-active {
  border-color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  box-shadow: none;
}

.docs-preferences__radii {
  gap: 3px;
}

.docs-preferences__radii button {
  width: 29px;
  height: 27px;
  border: 1px solid transparent;
  border-radius: 5px;
  background: transparent;
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 160ms ease, background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.docs-preferences__radii button.is-active {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

@media (prefers-reduced-motion: reduce) {
  .docs-preferences__segments button,
  .docs-preferences__color,
  .docs-preferences__radii button {
    transition: none;
  }
}
</style>
