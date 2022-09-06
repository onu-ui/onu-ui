import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],

  shortcuts: [
    {
      'o-demo_wrapper':
        'p-12 c-#282f38 bg-white border border-light-700 rounded-sm',
      'o-demo_actions': 'flex justify-end pt-3 gap-2',
      'o-demo_action_item':
        'relative outline-none flex justify-center items-center w-7 h-7 p-0 rounded-full border border-light-900 bg-white cursor-pointer hover:bg-#E5E6EB',
      'o-demo_action_icon': 'c-#4E5969 text-md',
      'o-demo_tooltip':
        'opacity-0 h-7 bg-black px-2.5 py-1 box-border text-xs shadow-xs c-white inline-flex justify-center items-center  rounded absolute z-1 transition duration-600 whitespace-nowrap -top-8',
    },
  ],
})
