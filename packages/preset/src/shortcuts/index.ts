import type { Theme } from '@unocss/preset-mini'
import type { UserShortcuts } from 'unocss'
import { button } from './button'
import { input } from './input'
import { defaults } from './defaults'
import { avatar } from './avatar'
import { badge } from './badge'
import { switches } from './switch'

export const shortcuts: UserShortcuts<Theme> = [
  defaults,
  avatar,
  badge,
  button,
  input,
  switches,
].flat()
