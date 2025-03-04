import presetOnu from '@onu-ui/preset'
import { defineConfig } from 'unocss'

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
