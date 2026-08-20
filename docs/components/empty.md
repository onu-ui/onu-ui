---
outline: deep
---

# Empty

Explain an empty state and provide a useful next action.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<div emptybox>
  <div emptybox-header>
    <div emptybox-media emptybox-media-icon>+</div>
    <div emptybox-title>No projects yet</div>
    <p emptybox-desc>Create a project to start organizing your work.</p>
  </div>
  <div emptybox-content><button btn>Create project</button></div>
</div>
```

<div emptybox><div emptybox-header><div emptybox-media emptybox-media-icon>+</div><div emptybox-title>No projects yet</div><p emptybox-desc>Create a project to start organizing your work.</p></div><div emptybox-content><button btn>Create project</button></div></div>

## <i i-logos-vue /> With Vue

```vue
<script setup lang="ts">
import { OButton, OEmpty } from 'onu-ui'
</script>

<template>
  <OEmpty title="No projects yet" description="Create a project to start organizing your work.">
    <template #media><i class="i-carbon-folder-add" /></template>
    <OButton size="sm">Create project</OButton>
  </OEmpty>
</template>
```

<OEmpty title="No projects yet" description="Create a project to start organizing your work."><template #media><i i-carbon-folder-add /></template><OButton size="sm">Create project</OButton></OEmpty>
