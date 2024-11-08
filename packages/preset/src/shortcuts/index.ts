import type { CustomShortcut } from '../types'
import { avatar } from './avatar'
import { badge } from './badge'
import { button } from './button'
import { cards } from './card'
import { defaults } from './defaults'
import { input } from './input'
import { radio } from './radio'
import { switches } from './switch'

export const shortcuts: CustomShortcut[] = [
  defaults,
  avatar,
  badge,
  button,
  input,
  switches,
  radio,
  cards,
].flat()
