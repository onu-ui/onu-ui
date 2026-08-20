import type { DefaultTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { version } from '../package.json'

const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: 'What is Onu UI', link: '/guide/' },
  { text: 'Getting Started', link: '/guide/getting-started' },
  { text: 'Built-In', link: '/guide/built-in' },
  { text: 'Dynamic Theme', link: '/guide/dynamic-theme' },
]

const Components: DefaultTheme.SidebarItem[] = [
  {
    text: 'Basic',
    collapsed: false,
    items: [
      { text: 'Button', link: '/components/button' },
      { text: 'CSS primitives', link: '/components/css-primitives' },
      { text: 'Badge', link: '/components/badge' },
      { text: 'Kbd', link: '/components/kbd' },
      { text: 'Separator', link: '/components/separator' },
      // { text: 'Icon', link: '/components/icon' },
      // { text: 'Link', link: '/components/link' },
      // { text: 'Text', link: '/components/text' },
    ],
  },
  {
    text: 'Form',
    collapsed: false,
    items: [
      { text: 'Input', link: '/components/input' },
      { text: 'Checkbox', link: '/components/checkbox' },
      { text: 'Switch', link: '/components/switch' },
      // { text: 'Rate', link: '/components/rate' },
      { text: 'Radio', link: '/components/radio' },
    ],
  },
  {
    text: 'Data',
    collapsed: false,
    items: [
      { text: 'Avatar', link: '/components/avatar' },
      { text: 'Card', link: '/components/card' },
      { text: 'Empty', link: '/components/empty' },
      { text: 'Skeleton', link: '/components/skeleton' },
      // { text: 'Tag', link: '/components/tag' },
      // { text: 'Progress', link: '/components/progress' },
    ],
  },
  {
    text: 'Navigation',
    collapsed: false,
    items: [
      { text: 'Interactive components', link: '/components/interactive' },
      // { text: 'Affix', link: '/components/affix' },
      // { text: 'Backtop', link: '/components/backtop' },
    ],
  },
  {
    text: 'Feedback',
    collapsed: false,
    items: [
      { text: 'Alert', link: '/components/alert' },
      { text: 'Spinner', link: '/components/spinner' },
      // { text: 'Message', link: '/components/message' },
      // { text: 'Popup', link: '/components/popup' },
      // { text: 'ToolTip', link: '/components/tooltip' },
      // { text: 'Collapse', link: '/components/collapse' },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Onu UI',
  titleTemplate: 'Onu UI',
  description: 'Onu UI documentation site',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
    config(md) {
      md.core.ruler.after('block', 'onu-docs-mode-sections', (state) => {
        const headings = state.tokens
          .map((token, index) => token.type === 'heading_open' && token.tag === 'h2' ? state.tokens[index + 1]?.content : '')
          .filter(Boolean)
          .map(content => content.replace(/<[^>]+>|`/g, '').trim().toLowerCase())

        const resolveMode = (heading: string) => {
          if (heading.includes('vue'))
            return 'vue'
          if (heading.includes('unocss') || /^presets?$/.test(heading))
            return 'preset'
          return undefined
        }

        const modes = new Set(headings.map(resolveMode).filter(Boolean))
        if (!modes.has('preset') || !modes.has('vue'))
          return

        const output = []
        let sectionOpen = false

        for (let index = 0; index < state.tokens.length; index++) {
          const token = state.tokens[index]
          const heading = token.type === 'heading_open' && token.tag === 'h2'
            ? state.tokens[index + 1]?.content.replace(/<[^>]+>|`/g, '').trim().toLowerCase()
            : ''
          const nextMode = heading ? resolveMode(heading) : undefined

          if (nextMode) {
            if (sectionOpen) {
              const close = new state.Token('html_block', '', 0)
              close.content = '</div>\n'
              output.push(close)
            }

            const open = new state.Token('html_block', '', 0)
            open.content = `<div class="docs-content docs-content-${nextMode}">\n`
            output.push(open)
            sectionOpen = true
          }

          output.push(token)
        }

        if (sectionOpen) {
          const close = new state.Token('html_block', '', 0)
          close.content = '</div>\n'
          output.push(close)
        }

        state.tokens = output
      })
    },
  },
  head: [
    ['meta', { property: 'og:title', content: 'Onu UI' }],
    ['meta', { property: 'og:description', content: 'Opinionated and lightweight UI library' }],
    ['meta', { property: 'og:url', content: 'https://github.com/onu-ui/onu-ui' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    logo: '/logo.svg',
    nav: [
      {
        text: 'Guide',
        items: Guides,
      },
      {
        text: 'Components',
        items: [
          {
            text: 'overview',
            link: '/components/overview',
          },
          ...Components as any,
        ],
      },
      { text: 'Examples', link: '/example/', target: '_blank' },
      { text: 'Playground', link: 'https://unocss.dev/play/#html=DwEwlgbgBAZg9gOwC4FpEFcoGcwC8CmKWAxgE774JTGVL6lQDmAhgA4oAsAfAFBRTAAFgEYodAB6oO4gDZdgYKGDQJ0KGXEZx5AejC6RvfsFZH%2BUABJgANEoDkAWwHMoAIyRV3CdWAQBrKEFyGABeACJBJCRWLAAuHR1GMCRBdFcAOmI4Bx1cAE88iDCxZlJGfCRwgH1XGWZ-MK4AYSCwLGAdZi5rPnMm8mYkOAY4GGc3DwnvGV8AoPxQiKiY%2BMTk1IysnIwUdDAdHb3ipFLyyrCauob5Vy4AeVUoAFUASQ7bjq703o7TH9d0FFEFMzPwAEKAoYIXrGcDQVzMEDlcIAPzEgnwDkIAGYAAy47AORoAagAnKSOnCzO9IYhqXCoMwIINSqioIgZgh8I0YQIGaQ4OgECB8CAUDB0DI5LzjGAHIxsKRiOFItE4gkkik0plsrkChB0qwEIxijpQQIdFSfpbINTfKxAWI8qx8OEJEhivbHaw6jRBHAZCLSOEfcw-QGg%2Bko6beJTbTwgA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmcAvnOlBCHAOQCuWEAxgM6u0BQoksicYKKlaoYAeSz0yFKjVoABAvQC09YAHpBw0V06oAHr3hp0AQ3oAbYxmx4CxABQJOcOKwAW0GM3oxWALkQXVzhmVCwYVChA2nQLA2UHAD9QiAs4YEiQVmUwiKi4ACt6VhhgdABPXPDIqABKWgAaYNJm1y0RP0CAbWD2oU6Jeic%2BkOY06BiAYgA2AAYADlQAVgB2LhCyOuCAXWbSbaA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwBpxp5k0BhAVzjCVQoGVHNs8iTZEVUAJMVDla4CAXyA&version=66.0.0', target: '_blank' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/onu-ui/onu-ui/releases',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/onu-ui/onu-ui/blob/main/CONTRIBUTING.md',
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: Guides,
      },
      {
        text: 'Components',
        items: Components,
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/onu-ui/onu-ui/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onu-ui/onu-ui' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/zyyv.bsky.social' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Chris',
    },
  },
  outDir: './dist',
})
