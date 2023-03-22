import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  name: String,
}

export type OIconProps = ExtractPropTypes<typeof iconProps>
