import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Unocss(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
  ],
})
