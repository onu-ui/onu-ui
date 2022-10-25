<p align="center">
<img src="./public/logo.svg" style="width:100px;" />
<h1 align="center">Onu-UI (WIP)</h1>
<p align="center">Onu-UI for web glassmorphism components generate by UnoCSS.</p>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/onu-ui"><img src="https://img.shields.io/npm/v/onu-ui?color=c95f8b&amp;label=" alt="NPM version"></a></p>
<p align="center">
<a href="https://onu-ui.vercel.app/">🧑‍💻 Document <sup>Beta</sup></a> |
<a href="https://onu.zyob.top/">🤹‍♂️ Preview</a>
</p>

## Features
- 🌈 Glass Components - All components follow the glassmorphism style.
- 🔥 Introduce on demand  - Provide resolver to automatically import only used components.
- 🎉 Ts Supported - Support TypeScript & type checked & type inference.
- 💡 Cli Build - Easy to create repo with Onu Cli.
- 🍬 CSS Preset - Has UnoCSS preset package to use, rendered UI easily.
- ⚙️ Theme Config - Use attribute mode like unocss to desige. Support theme config to customize theme.

## Usage

### Full Import

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

### Custom UnoCSS config

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

### On-demand Import:

You need to use an additional plugin to import components you used. First you need to install [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) and [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import).

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

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

## Contributing

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).

Thank you to all the people who already contributed to OnuUI!

<a href="https://github.com/onu-ui/onu-ui/graphs/contributors"><img src="https://contrib.rocks/image?repo=onu-ui/onu-ui" /></a>

## Credits

[UnoCSS](https://github.com/unocss/unocss)

[@nuxt/ui](https://github.com/nuxt/ui)

## License

[MIT](./LICENSE) License © 2022 [chris-zhu](https://github.com/chris-zhu)
