<p align="center">
<img src="./public/logo.svg" style="width:100px;" />
<h1 align="center">Onu-UI (WIP)</h1>
<p align="center">Onu-UI for web glassmorphism components generate by UnoCSS.</p>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/onu-ui"><img src="https://img.shields.io/npm/v/onu-ui?color=c95f8b&amp;label=" alt="NPM version"></a></p>
<p align="center">
<a href="https://onu-ui.vercel.app/">🧑‍💻 Interactive Docs <sup>Beta</sup></a> |
<a href="https://onu.zyob.top/">🤹‍♂️ Playground</a>
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

## Preveiew
You can see the preview of the following commands:

```bash
npm run build
```

Then you can run playground to see the result.

```bash
npm run play
```

If you want start the dev server, you can run:

```bash
npm run dev
```


## Refer

[UnoCSS](https://github.com/unocss/unocss)

[@nuxt/ui](https://github.com/nuxt/ui)

## License

[MIT](./LICENSE) License © 2022 [chris-zhu](https://github.com/chris-zhu)
