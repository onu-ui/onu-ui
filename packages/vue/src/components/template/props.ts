import type { ExtractPropTypes } from 'vue'
import { disabled, loadable, readonly, sizeable } from '@/composables/useProps'

export const templateProps = {
  size: sizeable,
  disabled,
  readonly,
  loading: loadable,
}

export type TemplateProps = ExtractPropTypes<typeof templateProps>
