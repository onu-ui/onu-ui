---
outline: deep
---

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
import { OButton, OSpinner } from 'onu-ui'
</script>

<template>
  <OSpinner size="sm" label="Loading results" />
  <OSpinner variant="primary" label="Saving settings" />
  <OButton loading>Saving</OButton>
</template>
```

<div flex="~ gap-4 items-center"><OSpinner size="sm" label="Loading results" /><OSpinner variant="primary" label="Saving settings" /><OButton loading>Saving</OButton></div>
