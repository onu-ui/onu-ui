import type { App, Plugin } from 'vue'
import { resolveTheme } from '@onu-ui/preset/helper'
import { useStyleTag } from '@vueuse/core'
import { version } from '../package.json'

const installedApps = new WeakSet<App>()
const THEME_STYLE_ID = 'onu-ui-theme'

export interface OnuOptions {
  /** Theme primary color. Uses the neutral preset theme when omitted. */
  color?: string
}

export function createInstaller(components: Plugin[] = []) {
  const install = (app: App, options: OnuOptions = {}) => {
    if (installedApps.has(app))
      return

    installedApps.add(app)
    components.forEach(c => app.use(c))

    if (options.color) {
      useStyleTag(resolveTheme(options.color).cssMinify, {
        id: THEME_STYLE_ID,
      })
    }
  }

  return {
    version,
    install,
  }
}
