import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
  deps: {
    neverBundle: true,
  },
  fixedExtension: false,
  format: ['esm'],
  minify: true,
})
