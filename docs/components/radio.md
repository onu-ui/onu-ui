---
outline: deep
---

<script setup lang="ts">
import { RadioGroup } from 'onu-ui'
</script>

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
<!-- radio radio-purple radio-green dark:radio-red -->
<label radio="~" for="foo">
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
  <label radio="~" for="foo">
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
  <label radio="~ xs" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      checked
      name='size'
    >
    <span class="radio-dot" />
  </label>
  
  <label radio="~ sm" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='size'
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ md" for="foo">
    <input
      class="peer"
      type="radio"
      id="foo"
      name='size'
    >
    <span class="radio-dot" />
  </label>

  <label radio="~ lg" for="foo">
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
<label radio="~" for="foo">
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
  <label radio="~" for="foo">
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

  <label radio="~" for="foo">
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
<label radio="~ square" for="foo">
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
  <label radio="~ circle" for="foo">
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

Provide `Radio` and `RadioGroup` components to use radio in Vue.

### <i i-carbon:use-case-usage /> Usage

#### Basic

```vue
<script setup lang='ts'>
import { shallowRef } from 'vue'
import { RadioGroup } from 'onu-ui'

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 100, label: 'Option 3' },
]
const status = ref('option1')
</script>

<template>
  <RadioGroup
    v-model="status"
    :options="options"
    name="xxx"
  />
</template>
```

<RadioGroup
  model-value="option1"
  :options="[
    { value: 'option1', label: 'Starter' },
    { value: 'option2', label: 'Pro' },
    { value: 'option3', label: 'Team', disabled: true },
  ]"
  name="plan"
/>
