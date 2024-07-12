---
outline: deep
---

# Badge

Badge description.

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

#### Rounded

When the content is empty, the badge will be rounded.

```html
<div badge badge-xs></div>
<div badge badge-sm></div>
<div badge="~ md"></div>
<div badge="~ lg"></div>
```

<div flex="~ gap-2 items-center">
  <div badge badge-xs></div>
  <div badge badge-sm></div>
  <div badge="~ md"></div>
  <div badge="~ lg"></div>
</div>

#### Colors

When the content is empty, the badge will be rounded.

```html
<div badge badge-red>+99</div>
<div badge="~ yellow">+99</div>
<div badge badge-red></div>
<div badge="~ yellow"></div>
```

<div flex="~ gap-2 items-center">
  <div badge badge-red>+99</div>
  <div badge="~ yellow">+99</div>
  <div badge badge-red></div>
  <div badge="~ yellow"></div>
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

TODO
