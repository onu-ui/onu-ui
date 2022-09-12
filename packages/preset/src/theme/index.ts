import type { Theme } from '@unocss/preset-uno'

export default {
  colors: {
    context: 'rgba(var(--onu-c-context),%alpha)',
    primary: '#a855f7',
    secondary: '#1ABCFE',
    success: '#0ACF83',
    warning: '#FF9F43',
    error: '#FF5C5C',
    info: '#373e47',
    placeholder: '#dcdcdc',
  },
  fontFamily: {
    sans: 'Avenir, Helvetica, Arial, sans-serif',
  },
  boxShadow: {
    xs: 'var(--un-shadow-inset) 0 1px 1px 0 var(--un-shadow-color, rgba(0,0,0,0.03))',
    switch: 'calc(var(--o-switch-offset) * -1) 0 0 2px var(--o-switch-bc) inset, 0 0 0 2px var(--o-switch-bc) inset;',
    switchActive: 'calc(var(--o-switch-offset)) 0 0 2px var(--o-switch-c) inset, 0 0 0 2px var(--o-switch-c) inset;',
  },
  animation: {
    keyframes: {
      switching: `{0%{ box-shadow: 0 0 0 2px #1890ff66; }
        60%{ box-shadow: 0 0 0 4px #1890ff33; }
        80%{ box-shadow: 0 0 0 6px #1890ff1a; }
        100%{ box-shadow: 0 0 0 8px #1890ff0d; }}`,
    },
    durations: {
      switching: '0.3s',
    },
  },
} as Theme
