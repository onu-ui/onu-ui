import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/style.css'],
  clean: true,
  format: ['cjs', 'esm'],
})
