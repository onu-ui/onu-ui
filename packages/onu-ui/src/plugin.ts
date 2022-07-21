import type { App, Plugin } from 'vue'

const INSTALLED_KEY = Symbol('OnuUI_Installed')

export const createInstaller = (components: Plugin[] = []): Plugin => {
  const install = (app: App) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))
  }

  return {
    install,
  }
}
