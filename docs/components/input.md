---
outline: deep
---

<script setup lang="ts">
import { Input } from 'onu-ui'
</script>

# Input

Input description.

## <i i-logos-unocss /> With UnoCSS

### <i i-carbon:use-case-usage /> Usage

#### Basic

Provide a basic input field.
- `input-default` doesn't provide any styles by default, allowing you to fully customize it.
- `input` provides some basic styles.

```html
<input type="text" input-default placeholder="input-default..." />
<input type="text" input placeholder="input..." />
```

<div flex="~ gap-2 items-center">
  <input type="text" input-default placeholder="input-default..." />
  <input type="text" input placeholder="input..." />
</div>

#### Sizes

```html
<input input="~ xs" placeholder="input-xs...">
<input input="~ sm" placeholder="input-sm...">
<input input="~ md" placeholder="input-md...">
<input input="~ lg" placeholder="input-lg...">
```

<div grid="~ gap-2 items-center cols-1 md:cols-2 lg:cols-4 ">
  <input input="~ xs" placeholder="input-xs...">
  <input input="~ sm" placeholder="input-sm...">
  <input input="~ md" placeholder="input-md...">
  <input input="~ lg" placeholder="input-lg...">
</div>

#### Disabled

```html
<input input-default disabled placeholder="input-default with disabled...">
<input input disabled placeholder="input with disabled...">
```
<div flex="~ gap-2 items-center">
  <input input-default disabled placeholder="input with disabled...">
  <input input disabled placeholder="input with disabled...">
</div>

#### Colors

```html
<input input="~ red" placeholder="input with disabled...">
```
<div flex="~ gap-2 items-center">
  <input input="~ red" placeholder="input with disabled...">
</div>

### <i i-carbon:chart-bubble-packed /> Compose

```html
<label input flex="~ items-center gap-2">
  <input type="text" grow placeholder="Search">
  <i inline-block i-carbon-search cursor-pointer />
</label>
<label input="~ dashed" flex="~ items-center gap-2">
  <i text-theme-DEFAULT inline-block i-carbon:email />
  <input type="text" grow placeholder="Email">
</label>
```

<div flex="~ gap-2 items-center">
  <label input flex="~ items-center gap-2">
    <input type="text" grow placeholder="Search">
    <i inline-block i-carbon-search cursor-pointer />
  </label>
  <label input="~ dashed" flex="~ items-center gap-2">
    <i text-theme-DEFAULT inline-block i-carbon:email />
    <input type="text" grow placeholder="Email">
  </label>
</div>

## <i i-logos-vue /> With Vue

`Input` supports `v-model`, native input attributes, four sizes, and prefix or suffix slots.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { Input } from 'onu-ui'

const query = shallowRef('')
</script>

<template>
  <Input v-model="query" type="search" placeholder="Search components">
    <template #prefix>
      <i class="i-carbon-search" aria-hidden="true" />
    </template>
    <template #suffix>
      <span text-xs text-muted-foreground>{{ query.length }}/40</span>
    </template>
  </Input>
</template>
```

<Input type="search" placeholder="Search components">
  <template #prefix><i i-carbon-search aria-hidden="true" /></template>
  <template #suffix><span text-xs text-muted-foreground>0/40</span></template>
</Input>

```vue
<template>
  <div class="grid gap-3 sm:grid-cols-2">
    <Input size="sm" placeholder="Small input" />
    <Input dashed placeholder="Dashed input" />
    <Input disabled placeholder="Disabled input" />
    <Input type="number" :model-value="12" />
  </div>
</template>
```

<div grid="~ gap-3 sm:cols-2">
  <Input size="sm" placeholder="Small input" />
  <Input dashed placeholder="Dashed input" />
  <Input disabled placeholder="Disabled input" />
  <Input type="number" :model-value="12" />
</div>
