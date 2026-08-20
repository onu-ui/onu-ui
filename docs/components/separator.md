---
outline: deep
---

# Separator

Visually or semantically separate groups of content.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<div separator></div>
<div separator-v class="h-5"></div>
```

<div grid="~ gap-4"><div separator></div><div flex="~ items-center gap-3">Preset <div separator-v h-5></div> Vue</div></div>

## <i i-logos-vue /> With Vue

```vue
<script setup lang="ts">
import { OSeparator } from 'onu-ui'
</script>

<template>
  <OSeparator />
  <OSeparator orientation="vertical" class="h-5" :decorative="false" />
</template>
```

<div grid="~ gap-4"><OSeparator /><div flex="~ items-center gap-3">Preset <OSeparator orientation="vertical" h-5 /> Vue</div></div>
