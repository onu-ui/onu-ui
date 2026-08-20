import type { App, Component, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T, E extends Record<string, unknown>>(main: T, extra?: E) {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    for (const component of [main, ...Object.values(extra ?? {})])
      app.component((component as { name: string }).name, component as Component)
  }

  if (extra)
    Object.assign(main as object, extra)

  return main as SFCWithInstall<T> & E
}
