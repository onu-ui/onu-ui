import fs from 'node:fs/promises'
import path from 'node:path'
import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'

export default defineConfig(({ env }) => {
  return {
    entry: ['src/index.ts'],
    clean: true,
    format: ['cjs', 'esm'],
    external: ['unocss'],
    dts: true,
    minify: env?.NODE_ENV === 'production',
    esbuildPlugins: [esbuildPluginImportCSS()],
  }
})

function esbuildPluginImportCSS(): Plugin {
  const filter = /\.css$/

  return {
    name: 'esbuild-plugin-import-css',
    setup(build) {
      build.onResolve({ filter }, (args) => {
        return {
          path: path.resolve(args.resolveDir, args.path),
          namespace: 'import-css',
        }
      })

      build.onLoad({ filter }, async (args) => {
        const cssContent = await fs.readFile(args.path, 'utf8')
        return {
          contents: `export default \`${JSON.stringify(cssContent)}\`;`,
          loader: 'js',
        }
      })
    },
  }
}
