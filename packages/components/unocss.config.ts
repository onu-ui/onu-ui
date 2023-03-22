import { darkTheme, getCSSPreflights, lightTheme, presetOnu } from '@onu-ui/preset'
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { commonTheme } from './types'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
    presetUno(),
    presetOnu(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    ...[['xs', 'sm', 'md', 'lg'].map(s => [

    `o-button-${s}`,
    `o-avatar-${s}`,
    `o-avatar-group-${s}`,
    `o-card-${s}`,
    `o-checkbox-${s}`,
    `o-tag-${s}`,
    `o-switch-${s}`,
    ])].flat(2) as string[],
    ...commonTheme.map((item) => {
      return `o-${item}`
    }),
    ...commonTheme.map((item) => {
      return `hover-bg-${item}LightHover`
    }),
    ...commonTheme.map((item) => {
      return `active-border-${item}BorderActive`
    }),
    ...commonTheme.map((item) => {
      return `hover-border-${item}BorderHover`
    }),
    ...commonTheme.map((item) => {
      return `active-bg-${item}LightActive`
    }),
    ...commonTheme.map((item) => {
      return `hover-text-${item}LightHover`
    }),
    ...commonTheme.map((item) => {
      return `active-text-${item}LightActive`
    }),
  ],
  preflights: [{
    layer: 'base',
    getCSS: () => `
    :root {
      ${getCSSPreflights(lightTheme)}
    }
    :root.dark {
      ${getCSSPreflights(darkTheme)}
    }
    button,select,input,option {
      outline: none;
      -webkit-appearance: none
    }
    `,
  }],
})
