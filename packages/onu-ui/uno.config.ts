import { defineConfig } from 'unocss'
import { presetOnu } from '../../packages/preset/dist/index.js'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu(),
  ],
  configDeps: ['../../packages/preset/dist/index.js'],
})
