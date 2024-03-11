import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  build: {
    emptyOutDir: false,
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
  plugins: [
    Vue(),
    UnoCSS(),
  ],
})
