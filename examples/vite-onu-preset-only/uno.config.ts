import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetOnu(),
  ],
})
