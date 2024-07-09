// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import HomePage from './components/HomePage.vue'
import ThemePattle from './components/ThemePattle.vue'

import '@shikijs/vitepress-twoslash/style.css'
import './style.css'
import './override.css'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
    app.component('ThemePattle', ThemePattle)
  },
} satisfies Theme
