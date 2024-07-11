import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: ['src/index.ts'],
    clean: true,
    format: ['cjs', 'esm'],
    external: ['unocss'],
    dts: true,
    minify: true,
  }
})
