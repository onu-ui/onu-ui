import type { ExtractPropTypes, PropType } from 'vue'

export type AlertVariant = 'default' | 'soft' | 'destructive'

export const alertProps = {
  title: String,
  description: String,
  variant: {
    type: String as PropType<AlertVariant>,
    default: 'default',
  },
} as const

export type OAlertProps = ExtractPropTypes<typeof alertProps>
