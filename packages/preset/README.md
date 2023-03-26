# @onu-ui/preset
Onu-UI 的 unocss preset，作为 components 的样式支持，也可作为独立包进行使用。

## Usage

```bash
pnpm i unocss @onu-ui/preset -D
```
Add preset into unocss config.
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

## License

[MIT](../../LICENSE) License © 2022 [Chris](https://github.com/zyyv)
