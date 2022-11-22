import type { language } from '../locale'
import type{ MaybeRef } from '@vueuse/core'

export interface InstallOptions {
  prefix?: string
  namespace?: MaybeRef<string>
  locale?: MaybeRef<language>
  zIndex?: MaybeRef<number>
  size?: MaybeRef<string>
}

export const configProviderContextKey = '__onu_config_provider'
