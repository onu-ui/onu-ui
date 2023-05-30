import type { App } from 'vue'
import type { SFCInstallWithContext, SFCWithInstall } from '../types'

export function withInstall<T, E extends Record<string, any>>(main: T,
  extra?: E) {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})])
      app.component(comp.name, comp)
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra))
      (main as any)[key] = comp
  }
  return main as SFCWithInstall<T> & E
}

export function withInstallFunction<T>(fn: T, name: string) {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
