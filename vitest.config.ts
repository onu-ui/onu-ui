import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)
export default defineConfig({
  plugins: [Vue()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    // transformMode: {
    //   web: [/\.[jt]sx$/],
    // },
  },
  resolve: {
    alias: {
      '@onu-ui/preset': r('./packages/preset'),
      '@onu-ui/utils': r('./packages/utils'),
    },
  },
})
