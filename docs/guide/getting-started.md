---
outline: deep
---

# Getting Start

## <i i-logos-unocss /> Installation for `UnoCSS`

::: code-group
  ```bash [pnpm]
  pnpm i -D unocss @onu-ui/preset
  ```
  ```bash [yarn]
  yarn add -D unocss @onu-ui/preset
  ```
  ```bash [npm]
  npm i -D unocss @onu-ui/preset
  ```
:::

The Onu UI presets are framework-agnostic, allowing you to use them in any project that supports UnoCSS.

```ts twoslash {7-9}
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  presets: [
    presetOnu({
      /* options */
    })
  ]
})
```

Theme colors are **Random** by default. You can pass your theme color in the `color` option. The Onu UI presets use [Magicolor](https://github.com/zyyv/magic-color) underneath to generate a complete set of theme styles based on `color`. You can preview and debug in the [Magicolor Playground](https://color.zyob.top/).

### <i i-carbon-sync-settings /> Options

```ts
export interface PrsetOnuOptions {
  /**
   * Prefix of all of Onu's utility.
   *
   * @default 'o-'
   */
  prefix?: string

  /**
   * Theme primary color.
   *
   * @default 'auto' (random color)
   */
  color?: string

  /**
   * Onu default font loaded by google fonts.
   *
   * @default ['DM Sans', 'DM Sans:400,700']
   * @example `font-onu`
   */
  font?: WebFontMeta | string | (WebFontMeta | string)[]
}
```

## <i i-logos-vue /> Installation for `Vue`

::: code-group
  ```bash [pnpm]
  pnpm i onu-ui
  ```
  ```bash [yarn]
  yarn add onu-ui
  ```
  ```bash [npm]
  npm i onu-ui
  ```
:::

`onu-ui` Package is a Vue 3 component library that uses the Onu UI presets by default.

```ts
// main.ts
import { createApp } from 'vue'
import OnuUI from 'onu-ui'
import App from './App.vue'
import 'onu-ui/dist/onu-ui.css'

createApp(App).use(OnuUI).mount('#app')
```

::: tip

To enhance the capabilities of Onu components, I strongly recommend that you install `UnoCSS` and `@onu-ui/preset` at the same time.

::: details

```bash
pnpm i -D unocss @onu-ui/preset
```

Undering `UnoCSS` and `@onu-ui/preset`, you can easily customize the theme of the components.

```ts
// main.ts
import { createApp } from 'vue'
import OnuUI from 'onu-ui'
import App from './App.vue'
import 'onu-ui/dist/onu-ui.css'
import 'uno.css' // [!code ++]

createApp(App).use(OnuUI).mount('#app')
```

<br />

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  presets: [
    // ...
    presetOnu({ // [!code ++]
      preflights: false, // [!code ++]
    }) // [!code ++]
  ]
})
```

<br />

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    // ...
    UnoCSS() // [!code ++]
  ]
})
```

:::

Then you can use the Onu UI components in your Vue project, such as:

```vue
<template>
  <OButton>Button</OButton>
</template>
```

<OButton>Button</OButton>
