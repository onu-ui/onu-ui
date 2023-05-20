# Installation

This section explains how to properly install and use an Onu UI.

## Full Import

::: code-group
  ```bash [pnpm]
  pnpm add onu-ui && pnpm add -D unocss
  ```
  ```bash [yarn]
  yarn add onu-ui && yarn add -D unocss
  ```
  ```bash [npm]
  npm install onu-ui && npm install unocss -D
  ```
:::

Add `onu-ui` in your main entry file.

```ts
// main.ts
import OnuUI from 'onu-ui'
import 'uno.css'
import 'onu-ui/dist/style.css'

createApp(App).use(OnuUI).mount('#app')
```

## On-demand Import

You need to use an additional plugin to import components you used. First you need to install [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) and [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import).

::: code-group
  ```bash [pnpm]
  pnpm add -D unplugin-vue-components unplugin-auto-import
  ```
  ```bash [yarn]
  yarn add -D unplugin-vue-components unplugin-auto-import
  ```
  ```bash [npm]
  npm install -D unplugin-vue-components unplugin-auto-import
  ```
:::

Then add the code below into your Vite config file.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { OnuResolver } from 'onu-ui'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [OnuResolver()],
    }),
    Components({
      resolvers: [OnuResolver()],
    }),
  ],
})
```

## Custom UnoCSS config

Custom your UnoCSS config:
```ts
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetOnu } from 'onu-ui'

export default defineConfig({
  presets: [
    // ...
    presetUno(),
    presetAttributify(),
    presetOnu(),
  ],
})
```

## Get Volar Typescript support

You can add the `OnuUI` global component type definition to `compilerOptions.types` in your project's `tsconfig.json`. [Volar](https://github.com/johnsoncodehk/volar) will help you have a better experience while developing.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["onu-ui/volar"]
  }
}
```

## Using modules in Nuxt
Add `@onu-ui/nuxt` dependency to your project


```bash
pnpm i @onu-ui/nuxt -D
```

Add `@onu-ui/nuxt` to the `modules` section of `nuxt.config.ts`

```typescript
{
  export default defineNuxtConfig({
    // ...
    modules: [
      // ...
      '@onu-ui/nuxt'
    ],
    // ...
    css: [
      // ...
      'onu-ui/dist/style.css'
    ]
  })
}
```
