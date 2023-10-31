import { defineConfig } from 'unocss'
import transformAlias from 'unocss-transformer-alias'
import { presetOnu } from '../../packages/preset/dist/index.js'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu(),
  ],
  shortcuts: {
    wrapper: 'w-screen h-screen fcc',
  },
  transformers: [
    transformAlias(),
  ],
  configDeps: ['../../packages/preset/dist/index.js'],
})
