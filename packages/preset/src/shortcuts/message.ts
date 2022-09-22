import type { ThemeType } from '../type'
import type { DynamicShortcut } from 'unocss'

export const messageShortcuts: Record<string, string> = {
  // message
  'o-message-base':
  `fixed top-5 o-solid left-1/2 translate-x--1/2 z-1000 o-transition
   shadow-md py-2 px-3 fi rounded of-hidden gap-3 text-sm`,
  'o-message-closable': 'cursor-pointer',
  'o-message-content': 'fi gap-2',
}

export const messageDynamicShortcuts: DynamicShortcut[] = [
  [/^o-message-icon-(.*)$/, ([,s]) => {
    const iconType = s as ThemeType
    const themeType = ['primary', 'secondary', 'success', 'warning', 'error', 'info']
    if (themeType.includes(iconType)) {
      const iconThemeMap: Record<ThemeType, string> = {
        primary: 'i-carbon-stop-sign',
        secondary: 'i-carbon-software-resource',
        success: 'i-carbon-checkmark-outline',
        warning: 'i-carbon-warning-alt',
        error: 'i-carbon-close-outline',
        info: 'i-carbon-information',
      }
      return `${iconThemeMap[iconType]}`
    }
  }],
]
