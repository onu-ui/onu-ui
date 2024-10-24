import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

const r = (path: string) => resolve(__dirname, path)

export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': r('src'),
    },
  },
  build: {
    lib: {
      entry: r('src/index.ts'),
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
