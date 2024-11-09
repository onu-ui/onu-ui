import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
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
      { text: 'Badge', link: '/components/badge' },
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
      // { text: 'Checkbox', link: '/components/checkbox' },
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
      // { text: 'Card', link: '/components/card' },
      // { text: 'Empty', link: '/components/empty' },
      // { text: 'Tag', link: '/components/tag' },
      // { text: 'Progress', link: '/components/progress' },
    ],
  },
  {
    text: 'Navigation',
    collapsed: false,
    items: [
      // { text: 'Affix', link: '/components/affix' },
      // { text: 'Backtop', link: '/components/backtop' },
    ],
  },
  {
    text: 'Feedback',
    collapsed: false,
    items: [
      // { text: 'Alert', link: '/components/alert' },
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
      { text: 'Playground', link: 'https://unocss.dev/play/#html=DwEwlgbgBAZg9gOwC4FpEFcoGcwC8CmKWAxgE774JTGVL6lQDmAhgA4oAsAfAFBRTAAFgEYodAB6oO4gDZdgYKGDQJ0KGXEZx5AejC6RvfsFZcAEmAA0SgOQBbAcygAjJFVcJ1YBAGsog8hgAXgAiQSQkViwALh0dRjAkQXRnADpiODsdXABPHIgQsWZSRnwkUIB9ZxlmXxCuAGEAsCxgHWYuawbyZiQ4BjgYAWcuAHlVKABVAEk2kdS20z5h9AjEFzcjfihphGc4cWXjcGhnZhBS0IA-MUF8O0IAZgAGZ%2Bw7eoBqAE5vtpOtnNVn0EICTlBmBBesVrlBEDJvPh6kcBODSHB0AgQPgQCgYOgZHIUcYwHZGNhSMRQuFIjE4gB3RmpBJJFLpTLZPIQVKsBCMQo6LbGHQA5b-SCA7ysVZiHKsfChCRIQpSmWsGo0QRwGTY0ihVVIVJGgW8cUQXhAA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmcAvnOlBCHAOQCuWEAxgM6u0BQoksicYKKlaoYAeSz0yFKjVoABAvQC09YAHpBw0V06oAHr3hp0AQ3oAbYxmx4CxABQJOcOKwAW0GM3oxWALkQXVzhmVCwYVChA2nQLA2UHAD9QiAs4YEiQVmUwiKi4ACt6VhhgdABPXPDIqABKWgAaYNJm1y0RP0CAbWD2oU6Jeic%2BkOY06BiAYgA2AAYADlQAVgB2LhCyOuCAXWbSbaA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYgFwKgGzgUwBpxp5k0BhAVzjCVQoGVHNs8iTZEVUAJMVDla4CAXyA', target: '_blank' },
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
      {
        component: 'ThemePalette',
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
  outDir: './dist'
})
