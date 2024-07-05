import type { Theme } from '@unocss/preset-mini'
import type { DynamicShortcut, StaticShortcut, UserShortcuts } from 'unocss'
import { button } from './button'
import { input } from './input'
import { defaults } from './defaults'
import { avatar } from './avatar'
import { badge } from './badge'

type StaticOrDynamicShortcuts = (StaticShortcut | DynamicShortcut<Theme>)[]

export const shortcuts = [
  ...defaults as StaticOrDynamicShortcuts,
  ...avatar as StaticOrDynamicShortcuts,
  ...badge as StaticOrDynamicShortcuts,
  ...button as StaticOrDynamicShortcuts,
  input,
] as UserShortcuts<Theme>
