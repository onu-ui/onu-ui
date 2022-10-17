import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig(async() => {
  return {
    build: {
      target: 'modules',
      outDir: 'es',
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'Onu-UI',
        fileName: 'index',
      },
      rollupOptions: {
        external: ['vue'],
        formats: ['es'],
        fileName: () => 'index.js',
        treeshake: false,
      },
      commonjsOptions: {
        sourceMap: false,
      },
      chunkSizeWarningLimit: 10000,
    },
    plugins: [
      vue(),
      UnoCSS(),
      dts({
        include: ['../../packages'],
      }),
    ],
  }
})
