---
outline: deep
---

# Alert

Display contextual feedback without interrupting the current task.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<div alert>
  <div alert-title>Configuration saved</div>
  <div alert-desc>Your changes are available immediately.</div>
</div>

<div alert alert-destructive>
  <div alert-title>Connection failed</div>
  <div alert-desc>Check your network and try again.</div>
</div>
```

<div grid="~ gap-3">
  <div alert><div alert-title>Configuration saved</div><div alert-desc>Your changes are available immediately.</div></div>
  <div alert alert-destructive><div alert-title>Connection failed</div><div alert-desc>Check your network and try again.</div></div>
</div>

## <i i-logos-vue /> With Vue

`OAlert` accepts title and description props while keeping icon, title, and body slots available.

```vue
<script setup lang="ts">
import { OAlert } from 'onu-ui'
</script>

<template>
  <OAlert title="Configuration saved" description="Your changes are available immediately.">
    <template #icon><i class="i-carbon-checkmark" /></template>
  </OAlert>
  <OAlert variant="destructive" title="Connection failed">
    Check your network and try again.
  </OAlert>
</template>
```

<div grid="~ gap-3">
  <OAlert title="Configuration saved" description="Your changes are available immediately."><template #icon><i i-carbon-checkmark /></template></OAlert>
  <OAlert variant="destructive" title="Connection failed">Check your network and try again.</OAlert>
</div>
