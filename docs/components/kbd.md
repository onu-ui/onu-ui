---
outline: deep
---

# Kbd

Represent a keyboard key or shortcut.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<kbd kbd>⌘</kbd>
<kbd kbd kbd-outline>K</kbd>
```

<div flex="~ gap-2 items-center"><kbd kbd>⌘</kbd><kbd kbd kbd-outline>K</kbd></div>

## <i i-logos-vue /> With Vue

```vue
<script setup lang="ts">
import { OKbd } from 'onu-ui'
</script>

<template>
  <span>Open search <OKbd>⌘</OKbd> <OKbd outline>K</OKbd></span>
</template>
```

<span inline-flex items-center gap-2>Open search <OKbd>⌘</OKbd> <OKbd outline>K</OKbd></span>
