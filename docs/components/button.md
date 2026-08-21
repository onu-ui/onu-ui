---
outline: deep
---

<script setup lang="ts">
import { Button, ButtonGroup } from 'onu-ui'
</script>

# Button

Create a button with icon or link capabilities.

## <i i-logos-unocss /> With UnoCSS

### <i i-carbon:use-case-usage /> Usage

#### Basic

```html
<button class="btn">Button</button>
<button btn>Button</button>
<button btn-default>Button</button>
```

<div flex="~ gap-2 items-center">
<button class="btn">Button</button>
<button btn>Button</button>
<button btn-default>Button</button>
</div>

#### Variants

```html
<button btn btn-soft>soft</button>
<button btn btn-outline>outline</button>
<button btn btn-solid>solid</button>
<button btn btn-solid-cover>solid-cover</button>
<button btn="~ dashed">dashed</button>
<button btn="~ dashed-cover">dashed-cover</button>
<button btn="~ link">link</button>
<button btn="~ ghost">ghost</button>
<button btn="~ ghost-light">ghost-light</button>
```

<div grid="~ cols-3 gap-2 items-center">
<button btn btn-soft>soft</button>
<button btn btn-outline>outline</button>
<button btn btn-solid>solid</button>
<button btn btn-solid-cover>solid-cover</button>
<button btn="~ dashed">dashed</button>
<button btn="~ dashed-cover">dashed-cover</button>
<button btn="~ link">link</button>
<button btn="~ ghost">ghost</button>
<button btn="~ ghost-light">ghost-light</button>
</div>

#### Sizes

```html
<button btn btn-xs >extra small</button>
<button btn btn-sm>small</button>
<button btn btn-md>medium (default size)</button>
<button btn btn-lg>Button</button>
```

<div flex="~ gap-2 items-center">
<button btn btn-xs >extra small</button>
<button btn btn-sm>small</button>
<button btn btn-md>medium</button>
<button btn btn-lg>large</button>
</div>

#### Disabled

```html
<button btn disabled>Disabled</button>
```

<button btn disabled>Disabled</button>

#### With Icon

```html
<button btn>
  <i i-carbon-add></i>
  Add
</button>
<button btn animate-pulse disabled>
  loading <i inline-block i-carbon-assembly-reference animate-spin />
</button>
<button btn rounded-full>
  Download <i i-carbon-download />
</button>
<button btn aspect-square rounded-full class="group">
  <i i-carbon-favorite group-hover:i-carbon-favorite-filled></i>
</button>
```

<div flex="~ gap-2 items-center">
<button btn>
  <i i-carbon-add></i>
  Add
</button>
<button btn animate-pulse disabled>
  Loading <i inline-block i-carbon-assembly-reference animate-spin />
</button>
<button btn rounded-full>
  Download <i i-carbon-download />
</button>
<button btn aspect-square rounded-full class="group">
  <i i-carbon-favorite group-hover:i-carbon-favorite-filled></i>
</button>
</div>

#### Colors

```html
<button btn btn-red hover:btn-red-600>Red</button>
<button btn="~ yellow hover:yellow-600" >Yellow</button>
<button btn o-blue hover:o-blue-600>Blue</button>
```

<div flex="~ gap-2 items-center">
  <button btn btn-red hover:btn-red-600>Red</button>
  <button btn="~ yellow hover:yellow-600" >Yellow</button>
  <button btn o-blue hover:o-blue-600>Blue</button>
</div>

## <i i-logos-vue /> With Vue

### Usage

```vue
<script setup lang="ts">
import { Button, ButtonGroup } from 'onu-ui'
</script>

<template>
  <Button>Default</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost" icon="i-carbon-add">New item</Button>
  <Button loading>Saving</Button>
</template>
```

<div flex="~ gap-2 items-center wrap">
  <Button>Default</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost" icon="i-carbon-add">New item</Button>
  <Button loading>Saving</Button>
</div>

### Sizes and groups

```vue
<template>
  <ButtonGroup spacer>
    <Button size="sm">Previous</Button>
    <Button size="sm" variant="outline">Next</Button>
  </ButtonGroup>
</template>
```

<ButtonGroup spacer>
  <Button size="sm">Previous</Button>
  <Button size="sm" variant="outline">Next</Button>
</ButtonGroup>
