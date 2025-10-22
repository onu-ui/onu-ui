import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts', './src/helper.ts'],
  dts: true,
  external: ['unocss'],
})
