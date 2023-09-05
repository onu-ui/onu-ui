import { defineConfig } from 'unocss'
import { presetOnu } from '@onu-ui/preset'

export default defineConfig({
  envMode: 'dev',
  presets: [
    presetOnu() as any,
  ],
  shortcuts: {
    wrapper: 'w-screen h-screen flex items-center justify-center',
  },
  configDeps: ['../../packages/preset/src/shortcuts/index.ts'],
})
