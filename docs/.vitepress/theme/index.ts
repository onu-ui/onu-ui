import type { Theme } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import FloatingVue from 'floating-vue'
import OnuUI from 'onu-ui'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import DocsPreferences from './components/DocsPreferences.vue'
import HomePage from './components/HomePage.vue'
import Overview from './components/Overview.vue'
import ThemeInitializer from './components/ThemeInitializer.vue'
import { installExampleComponents } from './examples'

import 'floating-vue/dist/style.css'
import '@shikijs/vitepress-twoslash/style.css'
import './style.css'
import './override.css'
import 'onu-ui/dist/onu-ui.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ThemeInitializer),
      'sidebar-nav-before': () => h(DocsPreferences),
    })
  },
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('Overview', Overview)

    installExampleComponents(app)

    app.use(TwoslashFloatingVue)
    app.use(FloatingVue)
    app.use(OnuUI)
  },
} satisfies Theme
