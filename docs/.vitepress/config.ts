import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { applyPlugins } from './plugins/code'

const guides = [
  { text: 'Quick Start', link: '/guide/quick-start' },
  { text: 'Installation', link: '/guide/install' },
  { text: 'Overview', link: '/guide/overview' },
  { text: 'i18n', link: '/guide/i18n' },
  { text: 'Theming', link: '/guide/theme' },
  { text: 'Dark Mode', link: '/guide/dark' },
  { text: 'Changelog', link: '/guide/changelog' },
]

const nav = [
  { text: 'Guide', link: '/guide/quick-start' },
  { text: 'Components', link: '/components/button' },
  {
    text: `v${version}`,
    items: [
      {
        text: 'Release Notes',
        link: 'https://github.com/onu-ui/onu-ui/releases',
      },
    ],
  },
]

const sidebar = {
  '/guide': [
    {
      text: 'Developer Guide',
      items: guides,
    },
  ],
  '/components': [
    {
      text: 'Basic',
      items: [
        {
          text: 'Button',
          link: '/components/button',
        },
        {
          text: 'Badge',
          link: '/components/badge',
        },
        {
          text: 'Icon',
          link: '/components/icon',
        },
      ],
    },
    {
      text: 'Form',
      items: [
        {
          text: 'Checkbox',
          link: '/components/checkbox',
        },
        {
          text: 'Switch',
          link: '/components/switch',
        },
        {
          text: 'Rate',
          link: '/components/rate',
        },
      ],
    },
    {
      text: 'Data',
      items: [
        {
          text: 'Avatar',
          link: '/components/avatar',
        },
        {
          text: 'Card',
          link: '/components/card',
        },
        {
          text: 'Tag',
          link: '/components/tag',
        },
      ],
    },
    {
      text: 'Navigation',
      items: [],
    },
    {
      text: 'Feedback',
      items: [
        {
          text: 'Alert',
          link: '/components/alert',
        },
        {
          text: 'Message',
          link: '/components/message',
        },
        {
          text: 'Popup',
          link: '/components/popup',
        },
        {
          text: 'Collapse',
          link: '/components/collapse',
        },
      ],
    },
  ],
}

export default defineConfig({
  title: 'Onu-UI',
  description: 'Onu-UI for web glassmorphism components generate by UnoCSS',
  head: [
    ['meta', { property: 'og:title', content: 'Onu-UI' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Onu-UI for web glassmorphism components generate by UnoCSS',
      },
    ],
    [
      'meta',
      { property: 'og:url', content: 'https://github.com/onu-ui/onu-ui' },
    ],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/onu-ui/onu-ui/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    nav,
    socialLinks: [{ icon: 'github', link: 'https://github.com/onu-ui/onu-ui' }],
    sidebar,
    algolia: {
      appId: '',
      apiKey: '',
      indexName: '',
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2022-present Chris & Onu-UI Contributors',
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})
