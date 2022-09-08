import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import { applyPlugins } from './plugins/code'

const Components = [
  { text: 'Switch', link: '/components/switch' },
  { text: 'Checkbox', link: '/components/checkbox' },
  { text: 'Alert', link: '/components/alert' },
]

const nav = [
  { text: 'Guide', link: '/guide/' },
  { text: 'Components', link: '/components/installation' },
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
      text: 'Components',
      items: Components,
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
      ],
    },
    {
      text: 'Navigation',
      items: [
      ],
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
