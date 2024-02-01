import type { Theme } from '@unocss/preset-mini'
import type { UserShortcuts } from 'unocss'
import { button } from './button'
import { buttonGroup } from './button-group'
import { input } from './input'

export const shortcuts = [
  button,
  buttonGroup,
  input,
] as UserShortcuts<Theme>
