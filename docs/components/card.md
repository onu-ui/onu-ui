---
outline: deep
---

<script setup lang="ts">
import { Button, Card } from 'onu-ui'
</script>

# Card

Group related content and actions with a consistent semantic surface.

## <i i-logos-unocss /> With UnoCSS

### Usage

```html
<section card>
  <header card-header>
    <h3 card-title>Workspace</h3>
    <p card-desc>Manage members and project access.</p>
  </header>
  <div card-body>12 active members</div>
  <footer card-footer><button btn>Manage</button></footer>
</section>
```

<section card max-w-md>
  <header card-header><div><h3 card-title>Workspace</h3><p card-desc>Manage members and project access.</p></div></header>
  <div card-body>12 active members</div>
  <footer card-footer><button btn>Manage</button></footer>
</section>

## <i i-logos-vue /> With Vue

`Card` provides header, title, description, body, and footer composition slots.

```vue
<script setup lang="ts">
import { Button, Card } from 'onu-ui'
</script>

<template>
  <Card title="Workspace" description="Manage members and project access.">
    12 active members
    <template #footer><Button size="sm">Manage</Button></template>
  </Card>
</template>
```

<Card title="Workspace" description="Manage members and project access." max-w-md>
  12 active members
  <template #footer><Button size="sm">Manage</Button></template>
</Card>
