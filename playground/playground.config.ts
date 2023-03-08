export interface Dependency {
  pkg?: string
  version?: string
  path?: string
  source?: 'skyPack' | 'jsdelivr'
  cssPath?: string
}
export default {
  title: 'Onu-UI',
  compLibName: 'onu-ui',
  compLibShort: 'onu',
  // 版本地址
  versionUrl: 'https://data.jsdelivr.com/v1/package/npm/',
  // vue 最小版本
  vueMinVersion: '3.2.0',
  // onu-UI 最小版本
  compLibMinVersion: '1.0.9',
  // 组件库使用依赖
  libDeps: {} as Record<string, Dependency>,
  // 组件库、vue
  coreDeps: {
    'vue': {
      pkg: '@vue/runtime-dom',
      version: 'latest',
      path: '/dist/runtime-dom.esm-browser.js',
      source: 'jsdelivr',
    },
    '@vue/compiler-sfc': {
      pkg: '@vue/compiler-sfc',
      version: 'latest',
      path: '/dist/compiler-sfc.esm-browser.js',
      source: 'jsdelivr',
    },
    '@vue/shared': {
      pkg: '@vue/shared',
      version: 'latest',
      path: '/dist/shared.esm-bundler.js',
      source: 'jsdelivr',
    },
    'onu-ui': {
      pkg: 'onu-ui',
      version: 'latest',
      path: '/dist/onu-ui.js',
      source: 'jsdelivr',
      cssPath: '/dist/style.css',
    },
  } as Record<string, Dependency>,
  // cdn 地址
  cdnUrl: {
    skypack: 'https://cdn.skypack.dev/',
    jsdelivr: 'https://cdn.jsdelivr.net/npm/',
  },
  devDeps: {
    // 开发模式下，仅用于在 onu-ui 中开发组件调试
    'onu-ui': {
      path: `${location.origin}/play/src/onu-dev-proxy`,
    },
    'vue': {
      path: `${location.origin}/play/src/vue-dev-proxy`,
    },
    '@vue/compiler-sfc': {
      path: `${location.origin}/play/src/vue-sfc-dev-proxy`,
    },
    '@vue/shared': {
      path: `${location.origin}/play/src/vue-shared-dev-proxy`,
    },
  },
}
