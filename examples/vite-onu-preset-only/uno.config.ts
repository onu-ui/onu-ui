import { defineConfig, transformerVariantGroup } from 'unocss'
import transformAlias from 'unocss-transformer-alias'
import { presetOnu } from '../../packages/preset/src'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu({
      color: '#608e57',
    }),
  ],
  shortcuts: {
    wrapper: 'flex flex-col justify-center items-center',
  },
  transformers: [
    transformerVariantGroup(),
    transformAlias(),
  ],
  configDeps: ['../../packages/preset/dist/index.js'],
})
