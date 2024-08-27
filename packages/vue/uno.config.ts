import { presetOnu } from '@onu-ui/preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetOnu({
      prefix: 'o-',
    }),
  ],
})
