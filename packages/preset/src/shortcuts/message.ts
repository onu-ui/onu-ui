import type { DynamicShortcut } from 'unocss'
import type { ThemeType } from '../type'

export const messageShortcuts: Record<string, string> = {
  // message
  'o-message-base': 'fixed bg-baseBackground dark-bg-arrow c-baseText left-1/2 translate-x--1/2 o-transition shadow-md py-2 px-3 fi rounded of-hidden gap-3 text-sm font-semibold',
  'o-message-closable': 'cursor-pointer',
  'o-message-content': 'fi gap-2',
}

export const messageDynamicShortcuts: DynamicShortcut[] = [
  [/^o-message-icon-(.*)$/, ([,s]) => {
    const iconType = s as ThemeType
    const themeType = ['primary', 'secondary', 'success', 'warning', 'error', 'info']
    if (themeType.includes(iconType)) {
      const iconThemeMap: Record<ThemeType, string> = {
        primary: 'i-carbon:favorite-filled',
        secondary: 'i-carbon:asleep-filled',
        success: 'i-carbon:checkmark-filled',
        warning: 'i-carbon:warning-alt-filled',
        error: 'i-carbon-close-filled',
        info: 'i-carbon-information-filled',
      }
      return `${iconThemeMap[iconType]}`
    }
  }],
]
