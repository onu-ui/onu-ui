import type { Theme } from '@unocss/preset-mini'
import type { DynamicShortcut, StaticShortcut, UserShortcuts } from 'unocss'
import { button } from './button'
import { buttonGroup } from './button-group'
import { input } from './input'
import { defaults } from './defaults'

type StaticOrDynamicShortcuts = (StaticShortcut | DynamicShortcut<Theme>)[]

export const shortcuts = [
  ...defaults as StaticOrDynamicShortcuts,
  ...button as StaticOrDynamicShortcuts,
  ...buttonGroup as StaticOrDynamicShortcuts,
  input,
] as UserShortcuts<Theme>
