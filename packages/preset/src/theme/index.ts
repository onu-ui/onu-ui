import type { Theme } from '@unocss/preset-uno'

const PREFIX_THEME = '--onu-theme'

const getColorsTheme = (theme: string) => {
  return {
    [`${theme}`]: `var(${PREFIX_THEME}-${theme}Hsl)`,
    [`${theme}Light`]: `var(${PREFIX_THEME}-${theme}Light)`,
    [`${theme}LightHover`]: `var(${PREFIX_THEME}-${theme}LightHover)`,
    [`${theme}LightActive`]: `var(${PREFIX_THEME}-${theme}LightActive)`,
    [`${theme}LightContrast`]: `var(${PREFIX_THEME}-${theme}LightContrast)`,
    [`${theme}Border`]: `var(${PREFIX_THEME}-${theme}Border)`,
    [`${theme}BorderHover`]: `var(${PREFIX_THEME}-${theme}BorderHover)`,
    [`${theme}BorderActive`]: `var(${PREFIX_THEME}-${theme}BorderActive)`,
    [`${theme}SolidHover`]: `var(${PREFIX_THEME}-${theme}SolidHover)`,
    [`${theme}SolidContrast`]: `var(${PREFIX_THEME}-${theme}SolidContrast)`,
    [`${theme}Shadow`]: `var(${PREFIX_THEME}-${theme}Shadow)`,
  }
}

export default {
  colors: {
    context: 'rgba(var(--onu-c-context),%alpha)',
    ...getColorsTheme('primary'),
    ...getColorsTheme('secondary'),
    ...getColorsTheme('success'),
    ...getColorsTheme('warning'),
    ...getColorsTheme('error'),
    ...getColorsTheme('info'),
    placeholder: '#dcdcdc',
    darkBd: '#4C4D4F',
    grayBd: '#484849',
    darkBg: '#373739',
    darkTitle: '#ECECEC',
    darkText: '#7C7C7D',
    darkSubText: 'rgba(255,255,255,.7)',
    softBd: '#E5E6EB',
    grayBg: '#373739',
    embed: '#F1F3F5',
    darkContext: 'rgba(28,31,35)',
    lightContext: 'rgba(249,249,249)',
  },
  fontFamily: {
    sans: 'Avenir, Helvetica, Arial, sans-serif',
  },
  boxShadow: {
    xs: 'var(--un-shadow-inset) 0 1px 1px 0 var(--un-shadow-color, rgba(0,0,0,0.03))',
    switch:
      'calc(var(--o-switch-offset) * -1) 0 0 2px var(--o-switch-bc) inset, 0 0 0 2px var(--o-switch-bc) inset;',
    switchActive:
      'calc(var(--o-switch-offset)) 0 0 2px var(--o-switch-c) inset, 0 0 0 2px var(--o-switch-c) inset;',
    trigger: '0px 4px 10px #0000001a',
    cardMD: '0px 0px 12px rgb(0 0 0 / 12%)',
    cardSM: '0px 0px 6px rgb(0 0 0 / 12%)',
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
