import type { language } from '../locale'
import type { InjectionKey, Ref } from 'vue'
import type{ MaybeRef } from '@vueuse/core'

export interface InstallOptions {
  prefix?: string
  namespace?: MaybeRef<string>
  locale?: MaybeRef<language>
  zIndex?: MaybeRef<number>
}

export const configProviderContextKey: InjectionKey<Ref<InstallOptions>> = Symbol('__onu_config_provider')
