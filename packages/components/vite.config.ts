import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@onu-ui/components',
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
    vue(),
    UnoCSS({
      presets: [
        presetAttributify(),
        presetUno(),
        presetOnu(),
      ],
    }),
  ],
})
