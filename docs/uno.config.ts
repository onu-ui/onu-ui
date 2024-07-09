import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu({
      color: '#608e57',
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
