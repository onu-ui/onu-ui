import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import fs from 'fs-extra'
import type { ResolvedConfig } from 'vite'
// https://vitejs.dev/config/

let config: ResolvedConfig = undefined!

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@onu-ui/components',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    Vue(),
    VueJSX(),
    VueSetupExtend(),
    UnoCSS(),
    dts({
      // debug mode  https://github.com/qmhc/vite-plugin-dts/blob/main/README.zh-CN.md#%E6%89%93%E5%8C%85%E5%90%8E%E5%87%BA%E7%8E%B0%E7%B1%BB%E5%9E%8B%E6%96%87%E4%BB%B6%E7%BC%BA%E5%A4%B1
      // skipDiagnostics: false,
      // logDiagnostics: true,
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'auto-imports.d.ts',
    }),
    {
      name: 'vite-plugin-copy-style',
      apply: 'build',
      enforce: 'post',
      configResolved(_config) {
        config = _config
      },
      async closeBundle() {
        const { root, build } = config
        const { outDir } = build
        const styleFile = resolve(root, outDir, 'style.css')
        await fs.copyFile(
          styleFile,
          resolve(__dirname, '../onu-ui/src/style.css'),
        )
      },
    },
  ],
})
