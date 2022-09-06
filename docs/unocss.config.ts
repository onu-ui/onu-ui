import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // eslint-disable-next-line n/no-path-concat
  include: [`${__dirname}/**/*`],
  // eslint-disable-next-line n/no-path-concat
  exclude: [`${__dirname}/node_modules/**/*`],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        deep: '#1d4ed8',
      },
    },
  },
})
