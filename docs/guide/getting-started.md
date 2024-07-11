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

```ts {8}
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  presets: [
    presetOnu({
      color: 'Your theme base color', // Required.
    })
  ]
})
```

Theme colors are required. You can pass your theme color in the `color` option. The Onu UI presets use [Magicolor](https://github.com/zyyv/magic-color) underneath to generate a complete set of theme styles based on your theme color. You can preview and debug in the [Magicolor Playground](https://color.zyob.top/).

### <i i-carbon-window-preset /> Built-in Presets

::: info 💡 Tips
`@onu-ui/preset` internally integrates a collection of commonly used presets, offering an All-in-One solution, so you don't need to register additional presets for use.
:::

The built-in preset collections in Onu UI presets include:

```ts
const builtInPresets = [
  presetUno(), // The default preset for UnoCSS.
  presetAttributify(), // Attributify mode.
  presetIcons({ /* options */ }), // Icons preset.
  presetWebFonts({ /* options */ }), // Web fonts preset.
]
```

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
   */
  color: string

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

TODO
