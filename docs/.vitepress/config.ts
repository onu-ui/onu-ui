import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { version } from '../package.json'

const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: 'What is Onu UI', link: '/guide/' },
  { text: 'Getting Started', link: '/guide/getting-started' },
  { text: 'Built-In', link: '/guide/built-in' },
]

const Components: DefaultTheme.SidebarItem[] = [
  {
    text: 'Basic',
    collapsed: false,
    items: [
      { text: 'Button', link: '/components/button' },
      { text: 'Badge', link: '/components/badge' },
      { text: 'Icon', link: '/components/icon' },
      { text: 'Link', link: '/components/link' },
      { text: 'Text', link: '/components/text' },
    ],
  },
  {
    text: 'Form',
    collapsed: false,
    items: [
      { text: 'Input', link: '/components/input' },
      { text: 'Checkbox', link: '/components/checkbox' },
      { text: 'Switch', link: '/components/switch' },
      { text: 'Rate', link: '/components/rate' },
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
      { text: 'Tag', link: '/components/tag' },
      { text: 'Progress', link: '/components/progress' },
    ],
  },
  {
    text: 'Navigation',
    collapsed: false,
    items: [
      { text: 'Affix', link: '/components/affix' },
      { text: 'Backtop', link: '/components/backtop' },
    ],
  },
  {
    text: 'Feedback',
    collapsed: false,
    items: [
      { text: 'Alert', link: '/components/alert' },
      { text: 'Message', link: '/components/message' },
      { text: 'Popup', link: '/components/popup' },
      { text: 'ToolTip', link: '/components/tooltip' },
      { text: 'Collapse', link: '/components/collapse' },
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
      { text: 'Components', items: [
        {
          text: 'overview',
          link: '/components/overview',
        },
        ...Components as any,
      ] },
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
          {
            text: 'Code of Conduct',
            link: 'https://github.com/onu-ui/onu-ui/blob/main/CODE_OF_CONDUCT.md',
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
      { icon: 'x', link: 'https://twitter.com/chris_zyyv' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Chris',
    },
  },
})
