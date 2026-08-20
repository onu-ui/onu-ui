import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const r = (path: string) => resolve(import.meta.dirname, path)

export default defineConfig({
  plugins: [
    Vue(),
    dts({
      aliasesExclude: ['@onu-ui/utils'],
      entryRoot: 'src',
      include: ['src'],
      insertTypesEntry: true,
      outDirs: 'dist',
      processor: 'vue',
      tsconfigPath: '../../tsconfig.json',
    }),
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
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
