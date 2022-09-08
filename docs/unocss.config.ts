import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetOnu } from 'onu-ui'

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
    presetOnu(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],

  shortcuts: [
    {
      'fscw': 'flex justify-start items-center flex-wrap w-full',
      'o-demo_wrapper':
        'p-8 c-#282f38  border border-light-700 rounded-sm dark:bg-dark-700 dark:border-#4C4D4F flex [&:o-button-base]:!c-context',
      'o-demo_actions': 'flex justify-end pt-3 gap-2',
      'o-demo_action_item':
        'relative outline-none flex justify-center items-center w-7 h-7 p-0 rounded-full border border-light-900 dark:border-dark-900 bg-white dark:bg-#38383A cursor-pointer hover:bg-#E5E6EB dark:hover:bg-dark:300',
      'o-demo_action_icon': 'c-#4E5969 dark:c-white',
      'o-demo_tooltip':
        'opacity-0 h-7 bg-black px-2.5 py-1 box-border text-xs c-white inline-flex justify-center items-center  rounded absolute z-1 transition duration-600 whitespace-nowrap -top-8',
    },
  ],
})
