import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  // ...
  plugins: [
    Vue(),
    UnoCSS(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'onu-ui',
      fileName: 'onu-ui',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
