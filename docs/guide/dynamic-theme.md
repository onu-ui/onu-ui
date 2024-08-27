---
outline: deep
---

# Dynamic Theme

Onu registers theme color variables in CSS, which naturally supports dynamic theme switching, meaning you can switch themes dynamically at runtime.

## <i i-onu-logo /> Preset

In the preset, the `helper` tool class is provided to help you quickly override the default theme to achieve the purpose of dynamically switching themes.

```ts
import { resolveTheme } from '@onu-ui/preset/helper'
```

`resolveTheme` generates a set of `theme colors`、 `theme system CSS`, and `theme meta` through [`magic-color`](https://color.zyob.top/), and all color formats are converted to `HSL` type by default.

```ts
const { css, theme, meta } = resolveTheme('your theme color')

/** `meta` will be like: */

// {
//   "--onu-color-50": "250 247 255", // The hsl color value
//   "--onu-color-100": "245 238 255",
//   "--onu-color-200": "230 213 255",
//   "--onu-color-300": "214 187 255",
//   "--onu-color-400": "184 136 255",
//   "--onu-color-500": "153 85 255",
//   "--onu-color-600": "138 77 230",
//   "--onu-color-700": "92 51 153",
//   "--onu-color-800": "69 38 115",
//   "--onu-color-900": "46 26 77",
//   "--onu-color-950": "31 17 51",
// }
```

Then you can switch themes by replacing the preset default `CSS variables`.

```ts
const { meta } = resolveTheme('color')

for (const key in meta) {
  document.documentElement.style.setProperty(key, meta[key])
}
```

## <i i-logos-vue /> Vue (WIP)

Onu provides the `useTheme` hook to get the current theme information, and the `ThemeProvider` component to dynamically switch themes.

### useTheme

```vue
<script setup>
import { ThemeProvider, useTheme } from 'onu-ui'
</script>

<template>
  <ThemeProvider>
    <button btn>
      Button
    </button>
  </ThemeProvider>
</template>
```
