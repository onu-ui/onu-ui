import type { DynamicShortcut } from 'unocss'
import type { SizeType } from '../type'

export const avatarShortcuts: Record<string, string> = {
  // avatar
  'o-avatar-base': 'fcc of-hidden shadow-sm aspect-square rounded-full bg-context text-white',
  'o-avatar-mode-bg': 'bg-cover',
  'o-avatar-mode-img': 'object-cover select-none',
  'o-avatar-xs': 'h-6 text-xs shadow-xs',
  'o-avatar-sm': 'h-8 text-sm shadow-sm',
  'o-avatar-md': 'h-10 text-sm shadow-md',
  'o-avatar-lg': 'h-15 text-base shadow-md',
  'o-avatar-group-base': 'flex space-x--4 children-relative',

}

export const avatarDynamicShortcuts: DynamicShortcut[] = [
  [/^o-avatar-group-(.*)$/, ([,s]) => {
    if (['xs', 'sm', 'md', 'lg'].includes(s)) {
      const size = s as SizeType
      const avatarSizeMap: Record<SizeType, string> = {
        xs: 'h-6 text-xs shadow-xs',
        sm: 'h-8 text-sm shadow-sm',
        md: 'h-10 text-sm shadow-md',
        lg: 'h-15 text-base shadow-md',
      }
      const avatarGroupSpaceMap: Record<SizeType, string> = {
        xs: 'space-x--2',
        sm: 'space-x--3',
        md: 'space-x--4',
        lg: 'space-x--6',
      }
      return `important-${avatarGroupSpaceMap[size]} ${avatarSizeMap[size].split(' ').map(selector => `important-children-${selector}`).join(' ')}`
    }
  }],
]
