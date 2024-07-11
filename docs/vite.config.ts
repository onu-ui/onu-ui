import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import nodePolyfills from 'rollup-plugin-polyfill-node'

const externals = ['local-pkg', 'pkg-types', 'mlly', 'fs']

export default defineConfig({
  optimizeDeps: {
    exclude: ['vitepress', ...externals],
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
      external: externals,
      plugins: [nodePolyfills()],
    },
  },
})
