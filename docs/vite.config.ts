import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    UnoCSS(),
    Components({
      dirs: [
        '.vitepress/theme/components',
      ],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
})
