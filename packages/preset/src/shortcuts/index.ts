import type { CustomShortcut } from '../types'
import { button } from './button'
import { input } from './input'
import { defaults } from './defaults'
import { avatar } from './avatar'
import { badge } from './badge'
import { switches } from './switch'

export const shortcuts: CustomShortcut[] = [
  defaults,
  avatar,
  badge,
  button,
  input,
  switches,
].flat()
