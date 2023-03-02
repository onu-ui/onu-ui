<p align="center">
<img src="./public/logo.svg" style="width:100px;" />
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

- 🌈 Components Design - Onu provides neat & beautiful crafted UI components.
- 🔥 Introduce on demand  - Provide resolver to automatically import only used components.
- 🎉 TS Supported - Support TypeScript & type checked & type inference.
- 💡 Cli Build - Easy to create repo with Onu Cli.
- 🍬 CSS Preset - Has UnoCSS preset package to use, rendered UI easily.
- ⚙️ Theme Config - Use attribute mode like unocss to design. Support theme config to customize theme.

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

## Online Playground

You can try OnuUI out with the components built-in playground.
### Try it with our built-in playground(WIP)

### Try it with stackblitz or codesandbox

<a href="https://codesandbox.io/p/github/yzh990918/onu-starter/main">
<img src="https://img.shields.io/badge/Try%20On-CodeSandbox-hsl(265%2C97%25%2C66%25)?style=for-the-badge&logo=codesandbox" height="35" />
</a><br/>

<a href="https://stackblitz.com/edit/onu-starter">
<img src="https://img.shields.io/badge/Try%20on%20Stackblitz-1877F2?style=for-the-badge&logo=stackblitz&logoColor=white" height="35" />
</a>


## Environment

All components supported in modern browsers, support of neerly two or three versions.

| [![IE / Edge](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386595-58e6efd6-bd29-4671-bf28-e289dc8911e2.png)](http://godban.github.io/browsers-support-badges/) IE / Edge | [![Firefox](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386577-a25d20a4-c8e3-4c57-86bc-a1c853264457.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386568-5c1d71d1-732d-41b6-a20c-9900d1bcaa7a.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386580-1a0870a7-0483-4c92-84ee-5afcd1da92d6.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386571-49e31a0f-d0e4-4efc-8808-a5eedd4101fe.png)](http://godban.github.io/browsers-support-badges/) Opera | [![Electron](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598389214-b4742a92-cfe7-4730-aefb-f2fb5fd046f3.png)](http://godban.github.io/browsers-support-badges/) Electron |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| last 2 versions                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |



## Contributing

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).

Thank you to all the people who already contributed to OnuUI!

<a href="https://github.com/onu-ui/onu-ui/graphs/contributors"><img src="https://contrib.rocks/image?repo=onu-ui/onu-ui" /></a>

## Credits

[UnoCSS](https://github.com/unocss/unocss)

[@nuxt/ui](https://github.com/nuxt/ui)

## License

[MIT](./LICENSE) License © 2022 [chris-zhu](https://github.com/chris-zhu)
