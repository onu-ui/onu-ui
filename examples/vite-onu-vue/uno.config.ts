import { defineConfig } from 'unocss'
import presetOnu from '@onu-ui/preset'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu({
      preflights: false,
    }),
  ],
  shortcuts: {
    wrapper: 'flex flex-col justify-center items-center',
  },
})
