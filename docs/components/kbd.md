---
outline: deep
---

<script setup lang="ts">
import { Kbd } from 'onu-ui'
</script>

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
import { Kbd } from 'onu-ui'
</script>

<template>
  <span>Open search <Kbd>⌘</Kbd> <Kbd outline>K</Kbd></span>
</template>
```

<span inline-flex items-center gap-2>Open search <Kbd>⌘</Kbd> <Kbd outline>K</Kbd></span>
