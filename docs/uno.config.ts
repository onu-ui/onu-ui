import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu({
      preflights: false,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
