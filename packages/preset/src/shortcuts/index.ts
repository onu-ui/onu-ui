import type { Theme } from '@unocss/preset-mini'
import type { DynamicShortcut, StaticShortcut, UserShortcuts } from 'unocss'
import { button } from './button'
import { buttonGroup } from './button-group'
import { input } from './input'

type StaticOrDynamicShortcuts = (StaticShortcut | DynamicShortcut<Theme>)[]

export const shortcuts = [
  ...(button as StaticOrDynamicShortcuts),
  buttonGroup,
  input,
] as UserShortcuts<Theme>
