import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetUno(),
  ],
  shortcuts: {
    wrapper: 'flex flex-col justify-center items-center',
  },
})
