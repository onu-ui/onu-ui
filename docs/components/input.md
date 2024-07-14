---
outline: deep
---

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

TODO
