import { defineConfig, transformerVariantGroup } from 'unocss'
import transformAlias from 'unocss-transformer-alias'
import { presetOnu } from '../../packages/preset/dist/index.js'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu({
      webFonts: {
        fonts: {
          dm: 'DM Sans',
        },
      },
    }),
  ],
  shortcuts: {
    wrapper: 'w-screen h-screen fccc',
  },
  transformers: [
    transformerVariantGroup(),
    transformAlias(),
  ],
  configDeps: ['../../packages/preset/dist/index.js'],
})
