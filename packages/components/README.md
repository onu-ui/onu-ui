<p align="center">
<img src="./public/logo.svg" style="width:100px;" />
<h1 align="center">Onu-UI Components</h1>
<p align="center">Onu-UI for web glassmorphism components generate by UnoCSS.</p>
</p>

## Usage

```bash
pnpm i onu-ui
pnpm i unocss -D
```
Add `onu-ui` in your main entry file.

```ts
// main.ts
import OnuUI from 'onu-ui'
import 'uno.css'
import 'onu-ui/dist/style.css'

createApp(App).use(OnuUI).mount('#app')
```
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

## Preveiew
You can see the preview of the following commands:

```bash
pnpm run build
```

Then you can run playground to see the result.

```bash
pnpm run play
```

If you want start the dev server, you can run:

```bash
pnpm run dev
```


## Refer

[UnoCSS](https://github.com/unocss/unocss)

[@nuxt/ui](https://github.com/nuxt/ui)

## License

[MIT](../../LICENSE) License © 2022 [Chris](https://github.com/zyyv)
