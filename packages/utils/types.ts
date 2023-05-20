import type { App, AppContext, InjectionKey, Plugin, Ref } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type MaybeRef<T> = T | Ref<T>

export type ProvideFn = (<T>(key: string | InjectionKey<T>, value: T) => App<any>) | (<T>(key: string | number | InjectionKey<T>, value: T) => void) | undefined
