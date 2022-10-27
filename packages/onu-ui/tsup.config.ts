import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/style.css'],
  format: ['cjs', 'esm'],
  minify: true,
})
