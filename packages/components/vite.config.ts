import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import { presetOnu } from '@onu-ui/preset'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

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
    Vue(),
    VueSetupExtend(),
    UnoCSS({
      presets: [
        presetAttributify(),
        presetIcons(),
        presetUno(),
        presetOnu(),
      ],
      safelist: [...['xs', 'sm', 'md', 'lg', 'xl'].map(s => `o-button-${s}`)],
    }),
  ],
})
