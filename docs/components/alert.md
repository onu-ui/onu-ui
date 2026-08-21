---
outline: deep
---

<script setup lang="ts">
import { Alert } from 'onu-ui'
</script>

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

`Alert` accepts title and description props while keeping icon, title, and body slots available.

```vue
<script setup lang="ts">
import { Alert } from 'onu-ui'
</script>

<template>
  <Alert title="Configuration saved" description="Your changes are available immediately.">
    <template #icon><i class="i-carbon-checkmark" /></template>
  </Alert>
  <Alert variant="destructive" title="Connection failed">
    Check your network and try again.
  </Alert>
</template>
```

<div grid="~ gap-3">
  <Alert title="Configuration saved" description="Your changes are available immediately."><template #icon><i i-carbon-checkmark /></template></Alert>
  <Alert variant="destructive" title="Connection failed">Check your network and try again.</Alert>
</div>
