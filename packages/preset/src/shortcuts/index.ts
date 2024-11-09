import type { CustomShortcut } from '../types'
import { avatar } from './avatar'
import { badge } from './badge'
import { button } from './button'
import { cards } from './card'
import { checkboxs } from './checkbox'
import { defaults } from './defaults'
import { input } from './input'
import { radio } from './radio'
import { switches } from './switch'

export const shortcuts: CustomShortcut[] = [
  avatar,
  badge,
  button,
  cards,
  checkboxs,
  defaults,
  input,
  radio,
  switches,
].flat()
