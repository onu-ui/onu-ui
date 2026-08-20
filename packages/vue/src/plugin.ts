import type { App, Plugin } from 'vue'
import { version } from '../package.json'

const installedApps = new WeakSet<App>()

export function createInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    if (installedApps.has(app))
      return

    installedApps.add(app)
    components.forEach(c => app.use(c))
  }

  return {
    version,
    install,
  }
}
