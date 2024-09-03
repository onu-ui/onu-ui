import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetOnu } from '@onu-ui/preset'
import { DefaultThemeColor } from './.vitepress/theme/data/colors'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu({
      color: DefaultThemeColor,
      preflights: false,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
