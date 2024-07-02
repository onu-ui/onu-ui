import { defineConfig, transformerVariantGroup } from 'unocss'
import transformAlias from 'unocss-transformer-alias'
import { presetOnu } from '../../packages/preset/src'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu({
      // color: '#E94E4E',
      // webFonts: {
      //   fonts: {
      //     dm: 'DM Sans',
      //   },
      // },
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
