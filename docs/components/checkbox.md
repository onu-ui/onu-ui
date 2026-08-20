---
outline: deep
---

# Checkbox

Select one or more independent options.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<label class="inline-flex items-center gap-2">
  <span checkbox>
    <input class="peer" type="checkbox" checked>
    <span checkbox-dot>✓</span>
  </span>
  Include archived projects
</label>
```

<label inline-flex items-center gap-2><span checkbox><input class="peer" type="checkbox" checked><span checkbox-dot>✓</span></span>Include archived projects</label>

## <i i-logos-vue /> With Vue

`OCheckbox` supports a boolean `v-model`, sizes, disabled state, and indeterminate state.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { OCheckbox } from 'onu-ui'

const archived = shallowRef(true)
</script>

<template>
  <OCheckbox v-model="archived">Include archived projects</OCheckbox>
  <OCheckbox indeterminate>Some items selected</OCheckbox>
  <OCheckbox disabled>Managed by organization</OCheckbox>
</template>
```

<div flex="~ col gap-3 items-start">
  <OCheckbox :model-value="true">Include archived projects</OCheckbox>
  <OCheckbox indeterminate>Some items selected</OCheckbox>
  <OCheckbox disabled>Managed by organization</OCheckbox>
</div>
