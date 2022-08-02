import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Inspect(),
    Unocss(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
    }),
    Components({
      dirs: [path.resolve(__dirname, './components')],
    }),
    // Components({
    //   dirs: [path.resolve(__dirname, './components')],
    //   resolvers: [
    //     (name) => {
    //       const match = name.match(/^[oO]-?(.+)$/)
    //       if (match)
    //         return path.resolve('../packages/components', `./${match[1].toLowerCase()}`, './src/index.vue')
    //     },
    //   ],
    // }),
  ],
})
