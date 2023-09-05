import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: false,
  format: ['cjs', 'esm'],
  external: ['unocss'],
  dts: true,
  minify: true,
})
