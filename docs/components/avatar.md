---
outline: deep
---

<script setup lang="ts">
import { Avatar, AvatarGroup } from 'onu-ui'
</script>

# Avatar

Avatar description.

## <i i-logos-unocss /> With UnoCSS

### <i i-carbon:use-case-usage /> Usage

#### Basic

```html
<div avatar>
  <div rounded>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>
<div avatar>
  <div rounded-full>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>
```

<div flex="~ gap-2 items-center">
  <div avatar>
    <div rounded>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar>
    <div rounded-full>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
</div>

#### Sizes

```html
<div avatar="~ sm"> // xs | sm | md | lg
  <div rounded>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>
<div avatar w-24> // Custom size
  <div rounded>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>
```

<div flex="~ gap-2 items-center">
  <div avatar="~ xs">
    <div rounded>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar="~ sm">
    <div rounded>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar="~ md">
    <div rounded>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar="~ lg">
    <div rounded>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
</div>
<div avatar w-24>
  <div rounded>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>

#### Clip

```html
<div avatar mask-hexagon> // mask-squircle | mask-triangle | mask-hexagon
  <img src="https://www.github.com/zyyv.png">
</div>
```

<div flex="~ gap-2 items-center">
  <div avatar mask-squircle>
    <img src="https://www.github.com/zyyv.png">
  </div>
  <div avatar mask-triangle>
    <img src="https://www.github.com/zyyv.png">
  </div>
  <div avatar mask-hexagon>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>

#### With Status

Provide `avatar-online` and `avatar-offline` to show the status.

```html
<div avatar="~ online">
  <div rounded-full>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>
<div avatar="~ offline">
  <div rounded-full>
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>
<div avatar="~ theme-200 dark:theme-800">
  <div rounded-full ring="~ context">
    <img src="https://www.github.com/zyyv.png">
  </div>
</div>
```

<div flex items-center gap-2>
  <div avatar="~ online">
    <div rounded-full>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar="~ offline">
    <div rounded-full>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar="~ theme-200 dark:theme-800">
    <div rounded-full ring ring-context>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
</div>

#### Group

Use `avatar-group` to group multiple avatars.

```html
<div avatar-group space-x--6>
  <div avatar>
    <div rounded-full>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar>
    <div rounded-full>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar>
    <div rounded-full>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar avatar-placeholder>
    <div rounded-full>
      <span>+99</span>
    </div>
  </div>
</div>
```

<div avatar-group space-x--6>
  <div avatar>
    <div rounded-full>
      <img src="https://www.github.com/zyyv.png">
    </div>
  </div>
  <div avatar>
    <div rounded-full>
      <img src="https://www.github.com/yzh990918.png">
    </div>
  </div>
  <div avatar>
    <div rounded-full>
      <img src="https://www.github.com/xiaojieajie.png">
    </div>
  </div>
  <div avatar avatar-placeholder>
    <div rounded-full>
      <span>+99</span>
    </div>
  </div>
</div>

## <i i-logos-vue /> With Vue

Use `Avatar` for images, initials, status, and shaped variants. `AvatarGroup` controls a related stack.

```vue
<script setup lang="ts">
import { Avatar, AvatarGroup } from 'onu-ui'
</script>

<template>
  <AvatarGroup size="sm" space-x="-3" aria-label="Project members">
    <Avatar src="https://github.com/zyyv.png" alt="Chris" online />
    <Avatar src="https://github.com/yzh990918.png" alt="Zhihao" />
    <Avatar>+7</Avatar>
  </AvatarGroup>
</template>
```

<div flex="~ gap-5 items-center wrap">
  <Avatar src="https://github.com/zyyv.png" alt="Chris" online />
  <Avatar src="https://github.com/yzh990918.png" alt="Zhihao" size="lg" variant="hexagon" />
  <AvatarGroup size="sm" space-x="-3" aria-label="Project members">
    <Avatar src="https://github.com/zyyv.png" alt="Chris" />
    <Avatar src="https://github.com/yzh990918.png" alt="Zhihao" />
    <Avatar>+7</Avatar>
  </AvatarGroup>
</div>
