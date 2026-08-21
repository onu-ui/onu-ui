import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

const onuComponents = new Set([
  'Accordion',
  'Alert',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'Button',
  'ButtonGroup',
  'Card',
  'Checkbox',
  'Combobox',
  'DataTable',
  'DatePicker',
  'Dialog',
  'Empty',
  'Input',
  'Kbd',
  'Popover',
  'RadioGroup',
  'Separator',
  'Skeleton',
  'Spinner',
  'Switch',
  'Tabs',
  'Tooltip',
])

export default defineConfig({
  optimizeDeps: {
    exclude: ['vitepress'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    UnoCSS() as any,
    Components({
      dirs: [
        '.vitepress/theme/components',
      ],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      resolvers: [
        name => onuComponents.has(name)
          ? { name, from: 'onu-ui' }
          : undefined,
      ],
    }),
  ],
})
