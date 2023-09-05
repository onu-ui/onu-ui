import { defineConfig } from 'unocss'
import { presetOnu } from '../../packages/preset/dist/index.mjs'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu(),
  ],
  shortcuts: {
    wrapper: 'w-screen h-screen fcc',
  },
  configDeps: ['../../packages/preset/dist/index.mjs'],
})
