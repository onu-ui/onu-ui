import type { ExtractPropTypes, PropType } from 'vue'

export const separatorProps = {
  orientation: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  strong: Boolean,
  decorative: {
    type: Boolean,
    default: true,
  },
} as const

export type OSeparatorProps = ExtractPropTypes<typeof separatorProps>
