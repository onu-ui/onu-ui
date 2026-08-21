---
outline: deep
---

<script setup lang="ts">
import { Badge, Button, Spinner } from 'onu-ui'
</script>

# Badge

Displays a compact status, category, count, or link. The default size is `md`.

## <i i-logos-unocss /> With UnoCSS

### <i i-carbon:use-case-usage /> Usage

#### Basic

```html
<div badge-default>Badge</div>
<div badge>Badge</div>
```

<div flex="~ gap-2 items-center">
  <div class="badge">Badge</div>
  <div badge-default>Badge</div>
</div>

#### Variants

```html
<span class="badge">Default</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-destructive">Destructive</span>
<span class="badge badge-outline">Outline</span>
<span class="badge badge-ghost">Ghost</span>
<a class="badge badge-link" href="/docs">Link</a>
```

<div flex="~ gap-2 items-center wrap">
  <span class="badge">Default</span>
  <span class="badge badge-secondary">Secondary</span>
  <span class="badge badge-destructive">Destructive</span>
  <span class="badge badge-outline">Outline</span>
  <span class="badge badge-ghost">Ghost</span>
  <a class="badge badge-link" href="#with-vue">Link</a>
</div>

#### Sizes

```html
<div badge badge-xs>Badge</div>
<div badge badge-sm>Badge</div>
<div badge="~ md">Badge</div>
<div badge="~ lg">Badge</div>
```

<div flex="~ gap-2 items-center">
  <div badge badge-xs>xs small</div>
  <div badge badge-sm>small</div>
  <div badge="~ md">default</div>
  <div badge="~ lg">large</div>
</div>

#### Dot and positioning

Use `badge-dot` for a status indicator and position it relative to a parent.

```html
<span class="badge badge-dot badge-pos-tr" aria-label="New notification"></span>
```

<div relative inline-flex p-2>
  Notifications
  <span class="badge badge-dot badge-pos-tr" aria-label="New notification"></span>
</div>

#### Colors

Dynamic color shortcuts use the supplied color for text, a 10% tint for the background,
and a 25% tint for the border.

```html
<div badge badge-red>+99</div>
<div badge="~ yellow">+99</div>
<div class="badge badge-[#886886]">Custom</div>
```

<div flex="~ gap-2 items-center">
  <div badge badge-red>+99</div>
  <div badge="~ yellow">+99</div>
  <div class="badge badge-[#886886]">Custom</div>
</div>

### <i i-carbon:chart-bubble-packed /> Compose

For more complex badges, you can compose them with other components.

```html
<button btn>
  Inbox
  <div badge="~ theme-200 sm">
    +99
  </div>
</button>
```

<button btn>
  Inbox
  <div badge="~ sm theme-600">
    +99
  </div>
</button>

## <i i-logos-vue /> With Vue

`Badge` supports semantic elements, six variants, sizes, custom colors, dots, and corner positioning.

```vue
<script setup lang="ts">
import { Badge, Button } from 'onu-ui'
</script>

<template>
  <Badge>Stable</Badge>
  <Badge variant="secondary">Verified</Badge>
  <Badge variant="destructive">Failed</Badge>
  <Badge variant="outline">Vue 3.5</Badge>
  <Badge variant="ghost">Draft</Badge>
  <Badge class="badge-[#886886]">Custom</Badge>
  <Badge tag="a" variant="link" href="/releases">Release notes</Badge>
  <Button variant="outline">
    Inbox <Badge size="xs">12</Badge>
  </Button>
</template>
```

<div flex="~ gap-3 items-center wrap">
  <Badge>Stable</Badge>
  <Badge variant="secondary">Verified</Badge>
  <Badge variant="destructive">Failed</Badge>
  <Badge variant="outline">Vue 3.5</Badge>
  <Badge variant="ghost">Draft</Badge>
  <Badge class="badge-[#886886]">Custom</Badge>
  <Badge tag="a" variant="link" href="#badge">Release notes</Badge>
  <Button variant="outline">Inbox <Badge size="xs">12</Badge></Button>
  <span relative inline-flex p-2>Updates <Badge dot position="tr" class="badge-red" aria-label="New updates" /></span>
</div>

### With icon and spinner

Badge content is slot-based, so icons and `Spinner` can be composed directly.

```vue
<Badge variant="secondary">
  <span data-icon="inline-start" class="i-carbon-checkmark-filled" aria-hidden="true" />
  Verified
</Badge>
<Badge variant="outline">
  Generating
  <Spinner data-icon="inline-end" size="sm" label="Generating" />
</Badge>
```

### Props

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `default \| secondary \| destructive \| outline \| ghost \| link` | `default` |
| `size` | `xs \| sm \| md \| lg` | `md` |
| `tag` | HTML element name | `span` |
| `dot` | `boolean` | `false` |
| `position` | `tl \| tr \| bl \| br` | — |
