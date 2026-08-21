---
outline: deep
---

<script setup lang="ts">
import { Separator } from 'onu-ui'
</script>

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
import { Separator } from 'onu-ui'
</script>

<template>
  <Separator />
  <Separator orientation="vertical" class="h-5" :decorative="false" />
</template>
```

<div grid="~ gap-4"><Separator /><div flex="~ items-center gap-3">Preset <Separator orientation="vertical" h-5 /> Vue</div></div>
