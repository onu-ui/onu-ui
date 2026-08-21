---
outline: deep
---

<script setup lang="ts">
import { Button, Spinner } from 'onu-ui'
</script>

# Spinner

Indicate short, indeterminate work while preserving an accessible status label.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<span spinner spinner-sm></span>
<span spinner spinner-primary></span>
<span spinner spinner-lg spinner-muted></span>
```

<div flex="~ gap-4 items-center"><span spinner spinner-sm></span><span spinner spinner-primary></span><span spinner spinner-lg spinner-muted></span></div>

## <i i-logos-vue /> With Vue

```vue
<script setup lang="ts">
import { Button, Spinner } from 'onu-ui'
</script>

<template>
  <Spinner size="sm" label="Loading results" />
  <Spinner variant="primary" label="Saving settings" />
  <Button loading>Saving</Button>
</template>
```

<div flex="~ gap-4 items-center"><Spinner size="sm" label="Loading results" /><Spinner variant="primary" label="Saving settings" /><Button loading>Saving</Button></div>
