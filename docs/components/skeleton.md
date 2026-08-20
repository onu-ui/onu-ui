---
outline: deep
---

# Skeleton

Reserve layout while content is loading.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<div class="flex items-center gap-3">
  <div skeleton-avatar></div>
  <div class="grow space-y-2">
    <div skeleton-text class="w-2/3"></div>
    <div skeleton-text></div>
  </div>
</div>
```

<div flex="~ items-center gap-3"><div skeleton-avatar></div><div grow space-y-2><div skeleton-text class="w-2/3"></div><div skeleton-text></div></div></div>

## <i i-logos-vue /> With Vue

```vue
<script setup lang="ts">
import { OSkeleton } from 'onu-ui'
</script>

<template>
  <OSkeleton variant="avatar" />
  <OSkeleton variant="text" class="w-2/3" />
  <OSkeleton variant="text" />
</template>
```

<div flex="~ items-center gap-3"><OSkeleton variant="avatar" /><div grow space-y-2><OSkeleton variant="text" class="w-2/3" /><OSkeleton variant="text" /></div></div>
