---
outline: deep
---

<script setup lang="ts">
import { Button, Empty } from 'onu-ui'
</script>

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
import { Button, Empty } from 'onu-ui'
</script>

<template>
  <Empty title="No projects yet" description="Create a project to start organizing your work.">
    <template #media><i class="i-carbon-folder-add" /></template>
    <Button size="sm">Create project</Button>
  </Empty>
</template>
```

<Empty title="No projects yet" description="Create a project to start organizing your work."><template #media><i i-carbon-folder-add /></template><Button size="sm">Create project</Button></Empty>
