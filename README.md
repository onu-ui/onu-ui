<p align="center">
<img src="./public/logo.svg" style="width:100px;" />
<h1 align="center">Onu-UI (WIP)</h1>
<p align="center">Onu-UI for web glassmorphism components generate by UnoCSS.</p>
</p>

## Usage

```bash
npm i onu-ui
npm i unocss -D
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

## Refer

[UnoCSS](https://github.com/unocss/unocss)

[@nuxt/ui](https://github.com/nuxt/ui)
# License

[MIT](./LICENSE) License © 2022 [chris-zhu](https://github.com/chris-zhu)
