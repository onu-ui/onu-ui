---
outline: deep
---

<script setup lang="ts">
import { Skeleton } from 'onu-ui'
</script>

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
import { Skeleton } from 'onu-ui'
</script>

<template>
  <Skeleton variant="avatar" />
  <Skeleton variant="text" class="w-2/3" />
  <Skeleton variant="text" />
</template>
```

<div flex="~ items-center gap-3"><Skeleton variant="avatar" /><div grow space-y-2><Skeleton variant="text" class="w-2/3" /><Skeleton variant="text" /></div></div>
