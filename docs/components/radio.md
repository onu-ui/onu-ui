---
outline: deep
---

# Radio

The radio component is a form control that allows the user to select a single option from a set of options.

## <i i-logos-unocss /> With UnoCSS

### <i i-carbon:use-case-usage /> Usage

#### Basic

```html {3}
<label class="radio" for="foo">
  <input
    class="peer" /* Required for UnoCSS */
    type="radio"
    id="foo"
    value="foo"
    name="name"
  >
  <span class="radio-dot" />
</label>
```

<div flex="~ gap-2 items-center">
  <label class="radio" for="foo">
    <input
      class="peer" 
      id="foo"
      type="radio"
    >
    <span class="radio-dot" />
  </label>
  <label class="radio" for="bar">
    <input
      class="peer" 
      id="bar"
      type="radio"
      checked
    >
    <span class="radio-dot" />
  </label>
</div>

#### Colors

Use the `radio-<color>` class to change the color of the radio.

```html {1}
<!-- radio-theme-400 radio-purple radio-green dark:radio-red -->
<label radio="~ theme-400" for="foo">
  <input
    class="peer" /* Required for UnoCSS */
    type="radio"
    id="foo"
    value="foo"
    name="name"
  >
  <span class="radio-dot" />
</label>
```

<div flex="~ gap-2 items-center">
  <label radio="~ theme-400" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      checked
      name='colors'
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ purple dark:red" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='colors'
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ green dark:blue" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='colors'
    >
    <span class="radio-dot" />
  </label>
</div>

#### Sizes

Use the `radio-<size>` class to change the size of the radio.

```html
<label radio="~ sm" for="foo">
  <input
    class="peer" /* Required for UnoCSS */
    type="radio"
    id="foo"
    value="foo"
    name="name"
  >
  <span class="radio-dot" />
</label>
```

<div flex="~ gap-2 items-center">
  <label radio="~ theme-400 xs" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      checked
      name='size'
    >
    <span class="radio-dot" />
  </label>
  
  <label radio="~ theme-400 sm" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='size'
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ theme-400 md" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='size'
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ theme-400 lg" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='size'
    >
    <span class="radio-dot" />
  </label>
</div>

#### Disabled

```html {8}
<label radio="~ theme-400" for="foo">
  <input
    class="peer"
    type="radio"
    id="foo"
    value="foo"
    name="name"
    disabled
  >
  <span class="radio-dot" />
</label>
```

<div flex="~ gap-2 items-center">
  <label radio="~ theme-400" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      checked
      name='disabled'
      disabled
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ theme-400" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='disabled'
      disabled
    >
    <span class="radio-dot" />
  </label>
</div>

#### Shape

Provide `circle` or `square` to change the shape of the radio.
And default is `circle`.

```html {1}
<label radio="~ theme-400 square" for="foo">
  <input
    class="peer"
    type="radio"
    id="foo"
    value="foo"
    name="name"
  >
  <span class="radio-dot" />
</label>
```

<div flex="~ gap-2 items-center">
  <label radio="~ theme-400 circle" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      checked
      name='shape'
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ square orange" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='shape'
    >
    <span class="radio-dot" />
  </label>
</div>

## <i i-logos-vue /> With Vue

Provide `ORadio` and `ORadioGroup` components to use radio in Vue.

### <i i-carbon:use-case-usage /> Usage

#### Basic

```vue
<script setup lang='ts'>
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 100, label: 'Option 3' },
]
const status = ref('option1')
</script>

<Template>
  <ORadioGroup 
    v-model="status"
    :options="options"
    name="xxx"
  />
</Template>
```


