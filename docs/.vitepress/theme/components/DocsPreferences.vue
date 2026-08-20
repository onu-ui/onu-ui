<script setup lang="ts">
import type { DocsMode, DocsRadius } from '../composables/useDocsPreferences'
import { OSwitch } from 'onu-ui'
import { useDocsPreferences } from '../composables/useDocsPreferences'

const { color, isVueMode, mode, radius, setColor, setMode, setRadius } = useDocsPreferences()

const colors = [
  { label: 'Violet', value: '#8b5cf6' },
  { label: 'Blue', value: '#3b82f6' },
  { label: 'Cyan', value: '#0891b2' },
  { label: 'Emerald', value: '#059669' },
  { label: 'Orange', value: '#ea580c' },
  { label: 'Rose', value: '#e11d48' },
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
      <span id="docs-preferences-title">Documentation</span>
      <span class="docs-preferences__value">{{ mode === 'preset' ? 'Preset' : 'Vue' }}</span>
    </div>

    <div class="docs-preferences__mode" role="group" aria-label="Documentation mode">
      <button
        type="button"
        class="docs-preferences__mode-label"
        :class="{ 'is-active': mode === 'preset' }"
        :aria-pressed="mode === 'preset'"
        @click="selectMode('preset')"
      >
        Preset
      </button>
      <OSwitch v-model="isVueMode" size="sm" aria-label="Switch between Preset and Vue documentation" />
      <button
        type="button"
        class="docs-preferences__mode-label"
        :class="{ 'is-active': mode === 'vue' }"
        :aria-pressed="mode === 'vue'"
        @click="selectMode('vue')"
      >
        Vue
      </button>
    </div>

    <div class="docs-preferences__row">
      <span class="docs-preferences__label">Theme</span>
      <div class="docs-preferences__colors" role="group" aria-label="Theme color">
        <button
          v-for="item in colors"
          :key="item.value"
          type="button"
          class="docs-preferences__color"
          :class="{ 'is-active': color === item.value }"
          :style="{ backgroundColor: item.value }"
          :title="item.label"
          :aria-label="`Use ${item.label} theme`"
          :aria-pressed="color === item.value"
          @click="setColor(item.value)"
        />
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
  margin: 0 0 24px;
  padding: 0 0 24px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.docs-preferences__heading,
.docs-preferences__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.docs-preferences__heading {
  margin-bottom: 10px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
}

.docs-preferences__value {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.docs-preferences__mode {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 10px;
  min-height: 54px;
  margin-bottom: 16px;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: calc(var(--onu-docs-radius, 0.5rem) + 4px);
  background: var(--vp-c-bg-soft);
}

.docs-preferences__mode-label {
  border: 0;
  background: transparent;
  color: var(--vp-c-text-3);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: color 160ms ease;
}

.docs-preferences__mode-label:first-child {
  text-align: right;
}

.docs-preferences__mode-label:last-child {
  text-align: left;
}

.docs-preferences__mode-label.is-active {
  color: var(--vp-c-text-1);
}

.docs-preferences__mode-label:focus-visible,
.docs-preferences__color:focus-visible,
.docs-preferences__radii button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.docs-preferences__row + .docs-preferences__row {
  margin-top: 12px;
}

.docs-preferences__label {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
}

.docs-preferences__colors,
.docs-preferences__radii {
  display: flex;
  align-items: center;
  gap: 7px;
}

.docs-preferences__color {
  width: 18px;
  height: 18px;
  padding: 0;
  border: 2px solid var(--vp-c-bg);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--vp-c-divider);
  cursor: pointer;
}

.docs-preferences__color.is-active {
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

.docs-preferences__radii {
  gap: 2px;
  padding: 2px;
  border: 1px solid var(--vp-c-divider);
  border-radius: calc(var(--onu-docs-radius, 0.5rem) + 2px);
  background: var(--vp-c-bg-soft);
}

.docs-preferences__radii button {
  width: 27px;
  height: 25px;
  border: 0;
  border-radius: var(--onu-docs-radius, 0.5rem);
  background: transparent;
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.docs-preferences__radii button.is-active {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  box-shadow: 0 1px 3px color-mix(in srgb, var(--vp-c-text-1) 12%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .docs-preferences__mode-label {
    transition: none;
  }
}
</style>
