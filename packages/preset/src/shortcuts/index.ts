import type { Theme } from '@unocss/preset-mini'
import type { DynamicShortcut, StaticShortcut, UserShortcuts } from 'unocss'
import { button } from './button'
import { input } from './input'
import { defaults } from './defaults'
import { avatar } from './avatar'
import { badge } from './badge'
import { switches } from './switch'

export const shortcuts = [
  defaults,
  avatar,
  badge,
  button,
  input,
  switches,
].flat() as UserShortcuts<Theme>
