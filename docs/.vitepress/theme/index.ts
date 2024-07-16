// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import FloatingVue from 'floating-vue'
import HomePage from './components/HomePage.vue'
import ThemePalette from './components/ThemePalette.vue'

import 'floating-vue/dist/style.css'
import '@shikijs/vitepress-twoslash/style.css'
import 'shiki-magic-move/style.css'
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
    app.component('ThemePalette', ThemePalette)

    app.use(TwoslashFloatingVue)
    app.use(FloatingVue)
  },
} satisfies Theme
