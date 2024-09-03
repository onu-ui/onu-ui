import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['esm'],
  external: ['vue'],
  dts: true,
  minify: true,
})
