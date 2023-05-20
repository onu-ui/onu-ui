import * as plugins from '@onu-ui/components'
import type { App, Plugin } from 'vue'
import { provideGlobalConfig } from '../../utils'
import { version } from '../package.json'
import type { InstallOptions } from '../../utils'

const INSTALLED_KEY = Symbol('OnuUI_Installed')

export function createInstaller(components: Plugin[] = []) {
  const install = (app: App, options?: InstallOptions) => {
    if (app[INSTALLED_KEY])
      return

    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))

    if (options)
      provideGlobalConfig(options, app, true)

    // plugin install
    app.config.globalProperties.$message = plugins.OMessage
  }

  return {
    version,
    install,
  }
}
