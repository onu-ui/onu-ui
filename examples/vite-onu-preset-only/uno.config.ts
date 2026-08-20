import { presetOnu } from '@onu-ui/preset'
import { defineConfig, transformerVariantGroup } from 'unocss'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu(),
  ],
  shortcuts: {
    wrapper: 'flex flex-col justify-center items-center',
  },
  transformers: [
    transformerVariantGroup(),
  ],
  configDeps: ['../../packages/preset/dist/index.js'],
})
