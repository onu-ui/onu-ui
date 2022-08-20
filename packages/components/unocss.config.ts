import { presetOnu } from '@onu-ui/preset'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetUno(),
    presetOnu(),
  ],
  safelist: [['xs', 'sm', 'md', 'lg'].map(s => [`o-button-${s}`, `o-avatar-${s}`, `o-avatar-group-${s}`])].flat(2) as string[],
})
