import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetOnu(),
  ],
  shortcuts: {
    wrapper: 'w-screen h-screen flex items-center justify-center',
  },
})
