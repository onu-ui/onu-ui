import type { App, Plugin } from 'vue'
import { provideGlobalConfig } from '../../utils'
import { version } from '../package.json'
import type { InstallOptions } from '../../utils'

const INSTALLED_KEY = Symbol('Onu_UI_Installed')

export function createInstaller(components: Plugin[] = []) {
  const install = (app: App, options?: InstallOptions) => {
    if ((app as any)[INSTALLED_KEY])
      return

    (app as any)[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))

    if (options)
      provideGlobalConfig(options, app as any, true)
  }

  return {
    version,
    install,
  }
}
