---
outline: deep
---

<script setup lang="ts">
import { Checkbox } from 'onu-ui'
</script>

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

`Checkbox` supports a boolean `v-model`, sizes, disabled state, and indeterminate state.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { Checkbox } from 'onu-ui'

const archived = shallowRef(true)
</script>

<template>
  <Checkbox v-model="archived">Include archived projects</Checkbox>
  <Checkbox indeterminate>Some items selected</Checkbox>
  <Checkbox disabled>Managed by organization</Checkbox>
</template>
```

<div flex="~ col gap-3 items-start">
  <Checkbox :model-value="true">Include archived projects</Checkbox>
  <Checkbox indeterminate>Some items selected</Checkbox>
  <Checkbox disabled>Managed by organization</Checkbox>
</div>
