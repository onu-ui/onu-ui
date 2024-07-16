---
outline: deep
---

# Built-In

Onu comes with a collection of useful features built-in, so you don't have to configure them manually. You can use them out of the box or customize them to suit your needs.

## <i i-logos-unocss /> Presets

::: info 💡 Tips
`@onu-ui/preset` internally integrates a collection of commonly used presets, offering an All-in-One solution, so you don't need to register additional presets for use.
:::

The built-in preset collections in Onu UI presets include:

- `presetUno()`: The default preset for UnoCSS.
- `presetAttributify()`: Attributify mode.
- `presetIcons()`: Icons preset.
- `presetWebFonts()`: Web fonts preset.

::: danger ⚠️ Advanced settings
If you want to override the built-in presets, make sure it doesn't bring any destructive changes.
:::

```ts twoslash {10-13}
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  presets: [
    presetOnu({
      /* options */
    }),
    // Override the built-in presets
    presetUno({
      /* Uno options */
    }),
  ]
})
```

## <i i-carbon:text-font /> Fonts

`DM Sans` is a low-contrast geometric sans serif design, intended for use at smaller text sizes.

Use the `font-onu` utility to apply the default font.

```html
<div font-onu>Apply default font</div>
```

Onu uses the `DM Sans` font for almost all components and the documentation. If you have a better choice, you can customize the font by configuring the `font` option in `@onu-ui/preset`.

::: info 💡 Tips
The font provider comes from [`Google Fonts`](https://fonts.google.com/), refer to the [UnoCSS web fonts preset](https://unocss.dev/presets/web-fonts#fonts) option for more fonts.
:::
