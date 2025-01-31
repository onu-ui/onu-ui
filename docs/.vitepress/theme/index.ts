import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import FloatingVue, { Menu } from 'floating-vue'
import OnuUI from 'onu-ui'
import Overview from './components/Overview.vue'
import ThemePalette from './components/ThemePalette.vue'
import ThemePaletteInner from './components/ThemePaletteInner.vue'
import HomePage from './components/HomePage.vue'
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
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp({ app }) {
    app.component('ThemePalette', ThemePalette)
    app.component('ThemePaletteInner', ThemePaletteInner)
    app.component('Overview', Overview)
    app.component('VMenu', Menu)
    
    installExampleComponents(app)

    app.use(TwoslashFloatingVue)
    app.use(FloatingVue)
    app.use(OnuUI)
  },
} satisfies Theme
