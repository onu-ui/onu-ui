import path from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import execa from 'execa'
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)
const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig(() => {
  return {
    define: {
      __COMMIT__: JSON.stringify(commit),
    },
    base: '/play/',
    resolve: {
      alias: {
        '~': pathSrc,
      },
    },
    server: {
      https: false,
      host: true,
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        dirs: [path.resolve(pathSrc, 'components')],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      UnoCSS(),
    ],
    build: {
      outDir: '../docs/public/play',
      target: 'esnext',
      emptyOutDir: true,
      rollupOptions: {
        external: [
          '@iconify/utils/lib/loader/fs',
          '@iconify/utils/lib/loader/install-pkg',
          '@iconify/utils/lib/loader/node-loader',
          '@iconify/utils/lib/loader/node-loaders',
        ],
      },
    },
  }
})
