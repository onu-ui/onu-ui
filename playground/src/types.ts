import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export interface GlobModule {
  install: UserModule
  [key: string]: any
}
