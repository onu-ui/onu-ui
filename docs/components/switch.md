---
outline: deep
---

# Switch

A control that allows the user to toggle between checked and not checked.

## <i i-logos-unocss /> With UnoCSS

### <i i-carbon:use-case-usage /> Usage

#### Basic

```html {3}
<label switch="~ theme-400 dark:theme-500">
  <input 
    class="peer" // Add peer class to the input element
    type="checkbox"
  />
  <span switch-dot />
</label>
```

<div flex="~ gap-2 items-center">
  <label switch="~ theme-400 dark:theme-500">
    <input  class="peer" type="checkbox" />
    <span switch-dot />
  </label>
</div>

#### Color

We have built-in theme color for the active state, you can initialize the color by adding `switch-default`, or use `switch-anycolor` to customize the color.

```html {1,5}
<label switch="~ default">
  <input  class="peer" type="checkbox" />
  <span switch-dot />
</label>
<label switch="~ red dark:purple">
  <input  class="peer" type="checkbox" />
  <span switch-dot />
</label>
```

<div flex="~ gap-2 items-center">
  <label switch="~ default">
    <input  class="peer" type="checkbox" />
    <span switch-dot />
  </label>
  <label switch="~ red dark:purple">
    <input  class="peer" type="checkbox" />
    <span switch-dot />
  </label>
</div>

#### Size

默认使用 `md` 大小，你可以使用 `switch-xs|sm|md|lg` 来改变大小。

```html {1}
<label switch="~ md theme-400">
  <input  class="peer" type="checkbox" />
  <span switch-dot />
</label>
```

<div flex="~ gap-2 items-center">
  <label switch="~ xs theme-400">
    <input  class="peer" type="checkbox" />
    <span switch-dot />
  </label>
  <label switch="~ sm theme-400">
    <input  class="peer" type="checkbox" />
    <span switch-dot />
  </label>
  <label switch="~ md theme-400">
    <input  class="peer" type="checkbox" />
    <span switch-dot />
  </label>
  <label switch="~ lg theme-400">
    <input  class="peer" type="checkbox" />
    <span switch-dot />
  </label>
</div>

#### Disabled

```html {2}
<label switch="~ theme-400">
  <input  class="peer" type="checkbox" disabled />
  <span switch-dot />
</label>
```

<div flex="~ gap-2 items-center">
  <label switch="~ theme-400">
    <input  class="peer" type="checkbox" disabled />
    <span switch-dot />
  </label>
  <label switch="~ theme-400">
    <input  class="peer" type="checkbox" checked disabled />
    <span switch-dot />
  </label>
</div>

### <i i-carbon:chart-bubble-packed /> Compose

<SwitchCompose />


## <i i-logos-vue /> With Vue

TODO
