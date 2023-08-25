import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'

// import { OnuResolver } from 'onu-ui'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'

const r = (src: string) => resolve(__dirname, src)

export default defineConfig({
  plugins: [
    Vue(),
    Inspect(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      // resolvers: [OnuResolver()],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      // resolvers: [OnuResolver()],
      dts: 'src/components.d.ts',
    }),
    Layouts(),
    Pages(),
  ],
  resolve: {
    alias: {
      '~/': r('src/'),
    },
  },
})
