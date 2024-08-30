import { presetOnu } from '@onu-ui/preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  envMode: 'build',
  cli: {
    entry: {
      patterns: ['src/**/*.ts', 'src/**/*.vue', '!**/*.d.ts'],
      outFile: 'dist/onu-ui.css',
    },
  },
  presets: [
    presetOnu({
      color: '#608e57',
    }),
  ],
})
