import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: ['src/index.ts', 'src/helper.ts'],
    clean: true,
    format: ['esm'],
    external: ['unocss'],
    dts: true,
    minify: true,
  }
})
