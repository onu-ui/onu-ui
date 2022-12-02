import { darkTheme, getCSSPreflights, lightTheme, presetOnu } from '@onu-ui/preset'
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

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
  safelist: [['xs', 'sm', 'md', 'lg'].map(s => [
    'o-primary', 'o-secondary', 'o-success', 'o-warning', 'o-error', 'o-info',
    `o-button-${s}`,
    `o-avatar-${s}`,
    `o-avatar-group-${s}`,
    `o-card-${s}`,
    `o-checkbox-${s}`,
    `o-tag-${s}`,
    `o-switch-${s}`,
  ])].flat(2) as string[],
  preflights: [{
    layer: 'base',
    getCSS: () => `
    :root {
      ${getCSSPreflights(lightTheme)}
    }
    :root.dark {
      ${getCSSPreflights(darkTheme)}
    }
    `,
  }],
})
