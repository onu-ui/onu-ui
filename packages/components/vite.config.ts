import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import fs from 'fs-extra'
import AutoImport from 'unplugin-auto-import/vite'
import type { ResolvedConfig } from 'vite'
// https://vitejs.dev/config/

let config: ResolvedConfig = undefined!

export default defineConfig({
  build: {
    emptyOutDir: false,
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
