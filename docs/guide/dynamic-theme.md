---
outline: deep
---

# Dynamic Theme

Onu registers theme color variables in CSS, which naturally supports dynamic theme switching, meaning you can switch themes dynamically at runtime.

## <i i-logos-vue /> Vue

Onu provides the `useTheme` hook to get the current theme information, and the `ThemeProvider` component to dynamically switch themes.

## useTheme

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

<ThemePaletteInner />
