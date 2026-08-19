import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts', './src/helper.ts'],
  dts: true,
  exports: true,
  deps: {
    neverBundle: ['unocss'],
  },
  fixedExtension: false,
})
