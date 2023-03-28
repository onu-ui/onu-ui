<p align="center">
<img src="https://raw.githubusercontent.com/imageList/imglist/master/img/logo.svg" style="width:100px;" />
<h1 align="center">Onu UI (WIP)</h1>
<p align="center">Popular, beautiful and fast UnoCSS component library.</p>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/onu-ui"><img src="https://img.shields.io/npm/v/onu-ui?color=c95f8b&amp;label=" alt="NPM version"></a></p>
<p align="center">
<a href="https://onu.zyob.top/">🧑‍💻 Document <sup>Beta</sup></a> |
<a href="https://onu.zyob.top/">🤹‍♂️ Preview</a>
</p>

## Features

- 🌈 **Components Design** - Onu provides neat & beautiful crafted UI components.
- 🔥 **On demand Import**  - Provide resolver to automatically import only used components.
- 🎉 **Typescript Supported** - Support TypeScript & type checked & type inference.
- 💎 **[Iconify Icons](https://icones.js.org/)** - Use any icon from the library you love.
- 🍬 **[CSS Preset](https://github.com/onu-ui/onu-ui/tree/main/packages/preset)** - Has UnoCSS preset package to use, rendered UI easily.
- ⚙️ **Theme Config** - Use attribute mode like unocss to design. Support theme config to customize theme.

## Usage

### Full Import

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

## Online Playground

You can try OnuUI out with the components built-in playground.
### Try it with our built-in playground

[Playground](https://onu.zyob.top/play/)

### Try it with stackblitz or codesandbox

<a target="_blank" href="https://codesandbox.io/p/github/yzh990918/onu-starter/main">
<img src="https://img.shields.io/badge/Try%20On-CodeSandbox-hsl(265%2C97%25%2C66%25)?style=for-the-badge&logo=codesandbox" height="35" />
</a><br/>

<a target="_blank"  href="https://stackblitz.com/edit/onu-starter">
<img src="https://img.shields.io/badge/Try%20on%20Stackblitz-1877F2?style=for-the-badge&logo=stackblitz&logoColor=white" height="35" />
</a>

## Contributing

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).

Thanks to everyone who has already contributed to OnuUI!

<a href="https://github.com/onu-ui/onu-ui/graphs/contributors"><img src="https://contributors.nn.ci/api?repo=onu-ui/onu-ui" /></a>

## Discussions

Since `OnuUI` is under intensive development, we need your valuable comments and feature requirements of the component

Welcome to contact us at [Discussions](https://github.com/onu-ui/onu-ui/discussions) or [Issues](https://github.com/onu-ui/onu-ui/issues/new/choose), we will be more than happy to reply to your message.

## Credits

- [UnoCSS](https://github.com/unocss/unocss)
- [@nuxt/ui](https://github.com/nuxt/ui)

## License

[MIT](https://github.com/onu-ui/onu-ui/blob/main/LICENSE) License © 2022 [Chris](https://github.com/zyyv)
